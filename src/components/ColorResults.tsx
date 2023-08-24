import { colord } from 'colord';
import styled from 'styled-components';
import { useSWRConfig } from 'swr';
import { API } from '../config';
import { ColorData } from '../util/types';
import { ColorTable } from './ColorTable';
import { Stack } from './Common';

interface Props {
  searchColor: string;
  rawColors?: ColorData[];
  colors: ColorData[];
  error: any;
}

export const ColorResults: React.FC<Props> = ({ searchColor, rawColors, colors, error }) => {
  const isValid = colord(searchColor).isValid();
  const isValidOrEmpty = isValid || searchColor.length === 0;
  const { mutate } = useSWRConfig();

  if (error)
    return (
      <Stack>
        <ErrorText>Error: unable to source XKCD color file</ErrorText>
        <Button
          onClick={() => {
            // mutate will revalidate fetch
            mutate(API);
          }}
        >
          Refetch
        </Button>
      </Stack>
    );
  if (!rawColors) return <p>Loading...</p>;
  if (!isValidOrEmpty) return <p>"{searchColor}" is not a valid color code.</p>;
  return (
    <Stack gap="1rem">
      {searchColor.length > 0 ? (
        <p>
          Results for <ColorCode>"{searchColor}"</ColorCode>.
        </p>
      ) : (
        'All Colors.'
      )}
      {colors.length > 0 && isValidOrEmpty && <ColorTable colors={colors} />}
    </Stack>
  );
};

const ColorCode = styled.span`
  text-transform: uppercase;
`;

const ErrorText = styled.p`
  color: red;
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.5em 2em;
  cursor: pointer;
`;
