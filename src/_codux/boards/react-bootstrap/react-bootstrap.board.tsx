import { createBoard } from '@wixc3/react-board';
import ReactBootstrap from '../../../components/react-bootstrap/react-bootstrap';

export default createBoard({
    name: 'ReactBootstrap',
    Board: () => <ReactBootstrap />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 42,
    },
});
