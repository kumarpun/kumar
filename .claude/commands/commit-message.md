---
description: Create a commit message by analyzing git diffs
allowed-tools: Bash(git status:*). Bash(git diff --staged), Bash(git commit:*)
---

### Your task:

Analyze above staged git hanges and create a commit mesage. Use present tense and explain "why" something has changed, not just "what" has changed.

## Run these commands:

```bash
git status
git diff --staged
```

## Commit types with emojis:
Only use the following emojis:

| Emoji | Code | Type | Description |
|-------|------|------|-------------|
| ✨ | `:sparkles:` | feat | Introduce new features |
| 🐛 | `:bug:` | fix | Fix a bug |
| 🚑️ | `:ambulance:` | hotfix | Critical hotfix |
| 📝 | `:memo:` | docs | Add or update documentation |
| 💄 | `:lipstick:` | style | Add or update UI and style files |
| ♻️ | `:recycle:` | refactor | Refactor code |
| ⚡️ | `:zap:` | perf | Improve performance |
| ✅ | `:white_check_mark:` | test | Add, update, or pass tests |
| 🔧 | `:wrench:` | config | Add or update configuration files |
| 👷 | `:construction_worker:` | ci | Add or update CI build system |
| 🚀 | `:rocket:` | deploy | Deploy stuff |
| 📦️ | `:package:` | build | Add or update compiled files or packages |
| ⬆️ | `:arrow_up:` | deps | Upgrade dependencies |
| ⬇️ | `:arrow_down:` | deps | Downgrade dependencies |
| ➕ | `:heavy_plus_sign:` | deps | Add a dependency |
| ➖ | `:heavy_minus_sign:` | deps | Remove a dependency |
| 🔥 | `:fire:` | remove | Remove code or files |
| 🎨 | `:art:` | format | Improve structure/format of code |
| 💥 | `:boom:` | breaking | Introduce breaking changes |
| 🔒️ | `:lock:` | security | Fix security or privacy issues |
| ⏪️ | `:rewind:` | revert | Revert changes |
| 🔀 | `:twisted_rightwards_arrows:` | merge | Merge branches |
| 🚧 | `:construction:` | wip | Work in progress |
| 🗑️ | `:wastebasket:` | deprecate | Deprecate code to be cleaned up |
| 💡 | `:bulb:` | comment | Add or update comments in source code |
| 🩹 | `:adhesive_bandage:` | patch | Simple fix for non-critical issue |
| 🧪 | `:test_tube:` | test | Add a failing test |
| 🏷️ | `:label:` | types | Add or update types |
| 🌱 | `:seedling:` | seed | Add or update seed files |
| 🎉 | `:tada:` | init | Begin a project |

## Format:

```
<emoji> <type>(<optional scope>): <short description>

<optional body — explain WHY, not what>

<optional footer — breaking changes, closes #issue>
```

**Examples:**
```
✨ feat(auth): add OAuth2 login support

🐛 fix(api): prevent null pointer on empty response

💥 feat(db)!: migrate user table to new schema

BREAKING CHANGE: existing user sessions invalidated
```

**Rules:**
- Subject line ≤ 72 chars
- Use present tense ("add" not "added")
- No period at end of subject
- Body explains *why*, not *what*
- Reference issues in footer: `Closes #123`

## Output:

1. Show summary of changes currently staged
2. Propose commit message with appropriate emoji
3. Ask for confirmation before commiting

DO NOT auto-commit - wait for user approval, and only commit if the user says so.