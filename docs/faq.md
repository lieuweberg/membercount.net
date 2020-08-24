# FAQ

This FAQ (Frequently Asked Questions) notes... all the frequently asked questions. It is attempted to mirror the FAQ on the Discord server as best as possible.

## How do I set up the bot?
[Click here](https://discordapp.com/api/oauth2/authorize?client_id=432533456807919639&permissions=8&scope=bot) to invite the bot. Then run `m!setup`.

## Why is Member Count not responding?
Please check the following before asking for help.
- Make sure the bot has `Read Messages`, `Send Messages`, and `Embed Links` permissions.
- Make sure the bot is online. Discord might be having issues, or the bot might be restarting.

If you did the above and it still doesn't work, head over to the [support server](https://discord.gg/dWMgWWw).

## Can I change the prefix?
Yes! `m!prefix`. If you ever forget the prefix, you can always use `@Member Count <command>` to use the bot too.

## How do I turn on/off a counter?
Run `m!counter <counter> <on/off>`. Please see (/commands?id=counter)

## How do I change the counter names?
Use the command `m!countername <counter> <name>`, and include `{count}` in the name where you want the number to be at. This feature is for Patrons only. You can donate at https://www.patreon.com/member_count.

## What are the permissions the bot needs for all commands to work?
Here's the list:
```
> Read Messages         (reading messages, duh)
> Send Messages         (sending messages... again, duh)
> Manage Channels       (editing counter names and permissions (the latter to display the lock))
> Manage Roles          (edit connect permission for @ everyone (which is a role))
> Attach Files          (m!memberlist)
> Connect               (for some reason this is needed for editing too)
> Embed Links           (embeds, for example the help menu)
```
## Can the bot display a count other than these options?
As of now, [these](/commands?id=counter) are the only counters available. If you have any suggestions, do tell us in #suggestions!

## How do I prevent normal users from using the commands?
All counter related commands are already restricted to users with the `Administrator` permission. To prevent usage of other commands, restrict the bot under channel settings: `Permissions` > `Add Member` > `Member Count` > `Select ╳ under Send Messages`.  Note that this will prevent you from being able to use the bot in that channel as well.

## Why are the counters duplicating/not updating?
Please ensure that the bot has the correct permissions to the counters (i.e. `See Voice Channel`, `Manage Channel` and `Connect`).

## Can I manually update the counters?
No, due to the changes Discord required us to make, this is no longer a feature.

## Can I change the bot's username and avatar?
No, username and avatar are global. Changing it will affect all servers Member Count is on. You can only change the bot's nickname (under Manage User, on mobile), if you have the `Manage Nicknames` permission.

## Can I self-host the bot?
No, you can't. The bot's code is closed source.

## My counters are frozen!
The counters in your server update every 20 minutes. This is due to ratelimits (too many actions per X minutes) -- previously it was instant.

## How do a set a member goal?
Manually create a voice channel with the same settings as the counters and name it with your goal.

If you have premium you can use `m!countername` for a fancier goal (renaming the members or users counter, for example). [Click here](/commands?id=countername) for the command's documentation.