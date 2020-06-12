# Commands

This is a detailed list of the bot's commands. You can use the sidebar on your left (click the hamburger icon if you're on mobile) to quickly jump to a command.

If you want to add examples or improve this documentation in general, feel free to make a pull request on GitHub as noted [here](/?id=contributing).

!> The prefix used here is `m!`. If you have set your prefix to something else, use that instead! (e.g. if your prefix is `$`, use `$category`)

## category

`category` is used to manage the Server Stats category. It is not necessary to have this, so feel free to remove it or rename it to anything you like.

`m!category create` creates a new category if there is not already one. The category is created all the way at the bottom of the channel list. Feel free to move it anywhere.

`m!category update` moves all the (loose) counters in your server into the category. If there is none, use `m!category create`.

## counter

!> The youtube counter currently DOES NOT work!

`counter` is used to manage the counters in your server. Deleting or adding counters manually does not work, they have to be created through the bot.

Free counters:
 - members (users + bots)
 - users (humans)
 - bots (bots)
 - roles (total roles)
 - channels (total channels)

Premium counters:
 - role (members in a role)*
 - online (online members)
 - offline (offline members)
 - youtube (subscribers, views, and videos)*

You can turn a counter on and off by using `m!counter <counter> <on | off>`. Example: `m!counter roles off`.

?> There is common confusion between the role**s** and role counter. Make sure you don't use `role` when you mean to turn off `roles`.

---

\* These counters have special arguments.
- role: `m!counter role <role name between quotes ("") | role @mention> <on | off>`
- youtube: `m!counter youtube <youtube channel ID (starts with UC)> <subscribers | views | videos> <on | off>`
  - The channel ID is usually found in the url of the channel page (see *https[]()://youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw* for example).

Examples:
- role: `m!counter role "Tier 1 Patrons" on` or `m!counter role @Tier 1 Patrons on`. In the mention example, make sure that you actually mention the role (it appears highlighted).
- youtube: `m!counter youtube UCuAXFkgsw1L7xaCfnd5JJOw subscribers on`