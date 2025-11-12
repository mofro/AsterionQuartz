# Architectural Decisions for Asterion Vault

## 1. Template System

### 1.1 Template Structure
- **Location**: `/templates/` directory
- **Naming**: Lowercase with hyphens (e.g., `player-character.md`)
- **Required Sections**:
  - YAML frontmatter with standardized fields
  - Description
  - Abilities/Features
  - Relationships
  - Appearances/References

### 1.2 Template Types
1. **Player Character** (`player-character.md`)
2. **NPC** (`npc.md`)
3. **Antagonist** (`antagonist.md`)
4. **Companion** (`companion.md`)
5. **Organization** (`organization.md`)
6. **Location** (`location.md`)
7. **Item** (`item.md`)
8. **Session Log** (`session-log.md`)

## 2. Taxonomy & Frontmatter

### 2.1 Core Frontmatter Fields
```yaml
---
title: ""
type: ""        # character, location, item, etc.
subtype: ""     # pc, npc, city, dungeon, etc.
status: ""      # alive, deceased, unknown
created: ""     # ISO 8601 date
updated: ""     # ISO 8601 date
tags: []        # See taxonomy below
---
```

### 2.2 Taxonomy System
- **Character Types**: `#character/pc`, `#character/npc`, `#character/antagonist`
- **Races**: `#race/human`, `#race/elf`, `#race/dwarf`
- **Classes**: `#class/warrior`, `#class/mage`, `#class/cleric`
- **Factions**: `#faction/kingdom`, `#faction/guild`
- **Locations**: `#location/city`, `#location/dungeon`
- **Item Types**: `#item/weapon`, `#item/armor`, `#item/artifact`
- **Status**: `#status/alive`, `#status/deceased`, `#status/missing`
- **Relationships**: `#relationship/ally`, `#relationship/enemy`, `#relationship/romantic`

## 3. Linking Paradigms

### 3.1 Internal Linking
- **Basic Link**: `[[Page Name]]`
- **Section Link**: `[[Page Name#Section]]`
- **Aliased Link**: `[[Page Name|Display Text]]`
- **Relative Path**: `[[../sibling]]` or `[[subfolder/page]]`

### 3.2 Transclusion
- **Basic Transclusion**: `![[page]]`
- **Section Transclusion**: `![[page#section]]`
- **Block Reference**: `^block-id`

### 3.3 Relationship Mapping
```yaml
relationships:
  - type: ""      # ally, enemy, member, leader, etc.
    target: ""    # [[page]]
    notes: ""     # Additional context
```

## 4. Directory Structure

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

## 5. Living History System

### 5.1 Core Concept
A living, evolving record that grows organically from multiple sources, maintaining a single source of truth for historical events while allowing for rich cross-referencing between sessions, locations, and characters.

### 5.2 Implementation
- **Centralized History Files**: Each major location/entity has a dedicated history file in `_snippets/`
- **Bi-directional Linking**: Entries connect to/from session logs and entity pages
- **Progressive Detailing**: Start with broad strokes, add details as campaign progresses

### 5.3 File Structure
```
_snippets/
  history/
    locations/
      verdant-expanse-history.md
      thornwatch-history.md
    characters/
      alvion-history.md
      ferguson-history.md
  timelines/
    main-timeline.md
    character-arcs/
      alvion-timeline.md
```

### 5.4 Example: Location History
```markdown
# History of the Verdant Expanse

## Age of Legends (Pre-History)
- Mythical founding by the First Druids
- The Sundering of the World Tree

## Age of Kingdoms (0-500)
- [[Session-2024-03-15#^founding-thornwatch|Founding of Thornwatch]]
- [[Session-2024-05-10#^verdant-war|The Verdant War]]

## Current Age (501-Present)
- [[Session-2024-08-30#^spider-princess|Discovery of the Spider Princess]]
- [[Alvion-Naeeries#^hurdy-gurdy|Alvion acquires the Enchanted Hurdy-Gurdy]]
```

### 5.5 Session Log Integration
```markdown
# Session 2024-08-30: The Spider Princess

## Key Events
- ^spider-princess
  The party discovered the ancient elven ruins beneath Thornwatch...

## Loot
- [[Artifacts-&-Treasures#The Bloodleash|The Bloodleash]]
- 7,231 silver pieces

## NPCs Met
- [[Gliressë]], the Spider Princess
- [[Brother Fulton]], the scholar

## Locations Visited
- [[Thornwatch#^ancient-ruins|Ancient Elven Ruins]]
```

### 5.6 Automated Timeline
```dataview
TABLE date, event, session
FROM "_snippets/history" OR "logs/sessions"
WHERE date
SORT date DESC
```

## 6. Version Control

### 6.1 File Naming
- Use consistent naming: `YYYY-MM-DD-session-name.md`
- Avoid special characters in filenames
- Use hyphens for word separation

### 6.2 Changelog
- Maintain `CHANGELOG.md` for significant updates
- Use semantic versioning for releases

## 7. Transclusion Strategy

### 7.1 Content Organization
- Store reusable content in `_snippets/` by category (e.g., `_snippets/locations/`, `_snippets/characters/`)
- Use block references (`^block-id`) for fine-grained transclusion
- Example: `![[_snippets/locations/thornwatch#^history]]`

### 7.2 Living History Integration
- Reference historical events using section links: `[[Session-2024-08-30#^spider-princess]]`
- Create timeline views with DataView:
  ```dataview
  TABLE date, event, session
  FROM "_snippets/history" OR "logs/sessions"
  WHERE date
  SORT date DESC
  ```

## 8. Automation

### 8.1 Scripts
- `update-frontmatter.js`: Standardize frontmatter
- `validate-links.js`: Check for broken links
- `generate-indexes.js`: Create dynamic indexes

### 8.2 CI/CD
- GitHub Actions for:
  - Link validation
  - Frontmatter validation
  - Automated backups

## 8. Documentation

### 8.1 Style Guide
- Markdown formatting
- Naming conventions
- Template usage

### 8.2 Contribution Guidelines
- How to add new content
- Template usage
- Version control workflow

## 10. Implementation Plan

### 10.1 Phase 1: Foundation (Week 1-2)
1. Set up directory structure
2. Create core templates
3. Implement living history system
4. Establish tagging conventions

### 10.2 Phase 2: Content Migration (Week 3-4)
1. Migrate existing content to new structure
2. Standardize frontmatter
3. Implement history files for major locations/characters
4. Link session logs to history entries

### 10.3 Phase 3: Enhancement (Week 5-6)
1. Set up automated workflows
2. Create dynamic indexes with Dataview
3. Implement validation scripts
4. Create documentation

### 10.4 Phase 4: Maintenance (Ongoing)
1. Regular content audits
2. Update documentation
3. Refine templates as needed

## 11. Future Considerations

### 9.1 Plugin Integration
- Dataview for dynamic queries
- Templater for automation
- Excalidraw for diagrams

### 9.2 Performance
- Optimize large files
- Implement caching where needed
- Consider partial loading for large vaults
