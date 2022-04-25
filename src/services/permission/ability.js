import { defineAbility } from '@casl/ability';

export default () => defineAbility((can) => {
    can('create', 'User', { role: 2 });
    can('chat', 'User', { role: 2, state: 2 });
    can('chat', 'User', { role: 1, state: 2 });
    can('preventRenter', 'User', { role: 3 });
});