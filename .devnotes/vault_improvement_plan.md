# Asterion Vault Improvement Plan

## Phase 1: Foundation Setup

### 1.1 Directory Structure
```
obsidian/
├── _notes/               # development files
├── _templates/           # Template files
├── characters/           # All character types
│   ├── _templates/       # Character templates
│   ├── pcs/              # Player Characters
│   ├── npcs/             # Generic NPCs
│   ├── antagonists/      # Opponents and villains
│   ├── companions/       # Allies and hirelings
│   └── organizations/    # Factions and groups
├── locations/
│   ├── cities/
│   ├── dungeons/
│   ├── landmarks/        # Notable locations
│   ├── regions/
│   └── towns/
├── items/
│   ├── artifacts/
│   ├── magic/
│   └── mundane/
├── logs/
│   ├── sessions/
│   └── timeline/
└── rules/               # Game mechanics and references
```

### 1.2 Template Creation
1. **Creature Template** (`_templates/creature.md`)
   ```yaml
   ---
   name: ""
   type: creature
   creature_type: beast | monstrosity | undead | etc.
   size: tiny | small | medium | large | huge | gargantuan
   status: alive | deceased | unknown
   habitat: ""
   aliases: []
   tags: [creature]
   created: {{date}}
   updated: {{date}}
   ---
   
   # {{title}}
   
   ## Description
   Physical appearance and notable features
   
   ## Behavior
   Typical behavior and temperament
   
   ## Habitat
   Where this creature is typically found
   
   ## Interactions
   How this creature interacts with others
   
   ## Related Creatures
   - [[Related Creature 1]]
   - [[Related Creature 2]]
   ```

1. **Character Template** (`_templates/character.md`)
   ```yaml
   ---
   name: ""
   type: character
   race: ""
   class: ""
   status: alive | deceased | unknown
   aliases: []
   affiliations: []
   relationships: {}
   tags: [character]
   created: {{date}}
   updated: {{date}}
   ---
   
   # {{title}}
   
   ## Description
   
   ## Background
   
   ## Abilities
   
   ## Relationships
   
   ## Appearances
   - [[Logs/Sessions/]]
   ```

2. **Session Log Template** (`_templates/session_log.md`)
   ```yaml
   ---
   date: YYYY-MM-DD
   session_number: 0
   title: ""
   location: ""
   participants: []
   tags: []
   ---
   
   # Session {{session_number}}: {{title}}
   
   ## Summary
   
   ## Key Events
   
   ## Loot & Rewards
   
   ## NPCs Encountered
   
   ## Locations Visited
   
   ## Next Session Hooks
   ```

### 1.3 Tagging System
- **Character Types**: `#character/pc`, `#character/npc`, `#character/antagonist`
- **Races**: `#race/human`, `#race/elf`, `#race/dwarf`
- **Locations**: `#location/city`, `#location/dungeon`, `#region/asterion`
- **Factions**: `#faction/noble_house`, `#faction/merchant_guild`
- **Item Types**: `#item/weapon`, `#item/armor`, `#item/artifact`
- **Session Info**: `#session/combat`, `#session/roleplay`, `#session/exploration`
- **Creature**: `#creature/beast`, `#creature/monstrosity`, `#creature/undead`

## Phase 2: Content Migration

### 2.1 Creature Migration
1. Create creature templates for each creature type
2. Standardize frontmatter for existing creatures
3. Move creatures to appropriate subdirectories
   - `creatures/beasts/`
   - `creatures/monstrosities/`
   - `creatures/undead/`
   - etc.
4. Update links in session logs and character notes

### 2.2 Character Migration
1. Create character templates for each character type
2. Standardize frontmatter
3. Move characters to appropriate subdirectories
4. Update links in session logs

### 2.2 Session Logs
1. Apply session log template to all logs
2. Extract and link NPCs, locations, and items
3. Add cross-references between sessions

### 2.3 Reference Materials
1. Organize items into categories
2. Create consistent frontmatter
3. Link to related content

## Phase 3: Enhancement

### 3.1 DataViews Implementation
1. Create character index
2. Build session timeline
3. Generate relationship graphs
4. Create item catalogs

### 3.2 Automation
1. Link validation script
2. Tag cleanup automation
3. Dead link detection

## Phase 4: Maintenance

### 4.1 Documentation
1. Vault structure documentation
2. Template usage guide
3. Contribution guidelines

### 4.2 Workflow
1. Session logging process
2. Character creation workflow
3. Worldbuilding guidelines

## Implementation Notes

1. **Backup First**
   - Create a backup of the entire vault before making changes
   - Use version control (git) to track changes

2. **Incremental Changes**
   - Make changes in small, testable increments
   - Test templates with a few files before full migration

3. **Community Plugins**
   - Consider using plugins like:
     - Dataview
     - Templater
     - Various Complements
     - Tag Wrangler

4. **Performance**
   - Be mindful of large files
   - Consider splitting long session logs
   - Use embeds for large reference sections
