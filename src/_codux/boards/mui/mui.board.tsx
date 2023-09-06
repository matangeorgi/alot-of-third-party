import { createBoard } from '@wixc3/react-board';
import  Mui  from '../../../components/mui/mui';

export default createBoard({
    name: 'Mui',
    Board: () => <Mui />,
    isSnippet: true,
});
