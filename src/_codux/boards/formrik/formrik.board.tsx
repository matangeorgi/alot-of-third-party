import { createBoard } from '@wixc3/react-board';
import { Basic } from '../../../components/formrik/formrik';

export default createBoard({
    name: 'Formrik',
    Board: () => <Basic />,
    isSnippet: true,
});
