import styled from 'styled-components';
import { ColorData } from '../util/types';

interface Props {
  colors: ColorData[];
}

export const ColorTable: React.FC<Props> = ({ colors }) => {
  if (colors.length === 0) return null;
  return (
    <Table style={{ width: '100%' }}>
      <thead>
        <tr data-testid="color-table-head">
          <td />
          <TableHeadLabel>Name</TableHeadLabel>
          <TableHeadLabel>Hex</TableHeadLabel>
          <TableHeadLabel>RGB</TableHeadLabel>
          <TableHeadLabel>HSL</TableHeadLabel>
        </tr>
      </thead>
      <tbody data-testid="color-table-body">
        {colors.map((c) => (
          <tr key={c.hex}>
            <td>
              <ColorBox color={c.hex} style={{ backgroundColor: c.hex }} />
            </td>
            <td>{c.color}</td>
            <td>{c.hex}</td>
            <td>{c.rgb}</td>
            <td>{c.hsl}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  min-width: 800px;
  border-spacing: 0 0.5rem;
`;

const TableHeadLabel = styled.td`
  font-weight: bold;
`;

const ColorBox = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
