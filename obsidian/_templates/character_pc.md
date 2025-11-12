---
title: "{{NAME}}"
type: "character"
subtype: "pc"
player: "{{PLAYER_NAME}}"
race: "{{RACE}}"
class: "{{CLASS}}"
level: 1
status: "active"  # active, inactive, deceased
affiliations: []
relationships: {}
tags: ["character", "pc"]
created: {{date}}
updated: {{date}}
---

# {{title}}

## Description
Physical appearance and personality

## Background
- **Homeland": 
- **Background": 
- **Motivations":

## Abilities
- **Strengths":
- **Weaknesses":
- **Special Abilities":

## Equipment
- **Weapons":
- **Armor":
- **Magic Items":

## Session Log
```dataview
LIST FROM #session WHERE contains(players, this.file.link)
SORT date DESC
```
