import { createBoard } from '@wixc3/react-board';
import { ItIsJustAFragment } from '../../../components/it-is-just-a-fragment/it-is-just-a-fragment';

export default createBoard({
    name: 'ItIsJustAFragment',
    Board: () => <ItIsJustAFragment />,
    isSnippet: true,
});
