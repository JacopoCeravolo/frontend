import { createBoard } from '@wixc3/react-board';
import { IndustrySelector } from '../../../components/industry-selector/industry-selector';

export default createBoard({
    name: 'IndustrySelector',
    Board: () => <IndustrySelector />,
    isSnippet: true,
});