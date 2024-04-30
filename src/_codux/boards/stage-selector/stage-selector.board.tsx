import { createBoard } from '@wixc3/react-board';
import { StageSelector } from '../../../components/stage-selector/stage-selector';

export default createBoard({
    name: 'StageSelector',
    Board: () => <StageSelector />,
    isSnippet: true,
});