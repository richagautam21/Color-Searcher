import styled from 'styled-components';
import { Row } from './Common';

interface Props {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}

export const SearchBar: React.FC<Props> = ({ color, setColor, disabled }) => {
  return (
    <Label htmlFor="color-search">
      Color
      <Row gap=".5rem">
        <Input
          data-testid="color-search"
          disabled={disabled}
          type="text"
          id="color-search"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          placeholder="Enter Color"
        />
        <Input
          data-testid="color-picker"
          style={{ padding: 0, cursor: 'pointer' }}
          disabled={disabled}
          type="color"
          value={color}
          onInput={(e) => {
            setColor(e.currentTarget.value);
          }}
          placeholder="Enter Color"
        />
      </Row>
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const Input = styled.input`
  padding: 0.65em 1em;
  border-radius: 5px;
  border: 1px solid lightgrey;
  height: auto;
`;
