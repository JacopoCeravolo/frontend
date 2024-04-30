import { createBoard } from '@wixc3/react-board';
import { Stage } from '../../../components/stage/stage';

export default createBoard({
    name: 'Stage',
    Board: () => <Stage />,
    isSnippet: true,
});