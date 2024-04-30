import { createBoard } from '@wixc3/react-board';
import { RoleSelector } from '../../../components/role-selector/role-selector';

export default createBoard({
    name: 'RoleSelector',
    Board: () => <RoleSelector />,
    isSnippet: true,
});