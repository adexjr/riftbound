# 🌌 RIFTBOUND

A collectible-Drifter WhatsApp group game bot. This repository contains the project source; it is not an official WhatsApp client. Baileys is an unofficial WhatsApp Web client library, and compatibility or account risks may change. Use a separate test account, keep the bot opt-in, and avoid bulk or unsolicited messages.

## Run on Termux or Node.js 18+

```bash
pkg update && pkg upgrade -y
pkg install nodejs-lts git -y
npm install
npm run pair 2348012345678  # country code + number, digits only
npm start
```

Keep `auth_info/` private. It contains the linked account session and must never be committed or shared. The game stores local JSON data in the project directory by default; set `RIFTBOUND_DATA_DIR` to change it.

## Current prototype

The project files include the WhatsApp runner, game engine, Drifter roster, element wheel, JSON persistence, tests, and pairing helper. Core gameplay covers rifts and catches, collection, teams, fusion, battles, trades, shop, leaderboards, and group staff roles.

## Safety notes

Game events should remain fictional and affect only game data. Avoid forced recruitment, unsolicited or urgent direct messages, punitive inactivity decay, and mechanics that pressure players to play at night. Do not use the bot for real-world targeting, hacking, or unsolicited messaging.
