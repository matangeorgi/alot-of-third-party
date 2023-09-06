import { createBoard } from '@wixc3/react-board';
import FluentUI from '../../../components/fluent-ui/fluent-ui';

export default createBoard({
    name: 'FluentUI',
    Board: () => <FluentUI />,
    isSnippet: true,
});
