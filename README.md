# Lumen

Lumen is a modern, fast, accessible Online Store 2.0 Shopify theme with a built-in agentic AI shopping assistant.

## Features

- Clean, conversion-focused design with two presets (Lumen Light / Lumen Noir).
- Full Online Store 2.0 architecture: JSON templates, section groups, theme blocks, app blocks.
- AI shopping assistant: catalog search, policy answers, cart management, checkout hand-off.
- Cart drawer, predictive search, mobile search modal, sticky add-to-cart.
- Color schemes, Shopify font picker, announcement bar, newsletter, FAQ, testimonials, video.
- No third-party scripts, no tracking, no external fonts or CDNs.

## AI Assistant

### Mode 1 – No-AI mode (default, zero configuration)

The chat talks from the browser to the store MCP/UCP endpoints and the Cart AJAX API. No API keys required.

### Mode 2 – AI mode (optional)

Theme settings → AI shopping assistant → optional HTTPS LLM proxy URL. If empty or failing, Mode 1 is used.

**Never put API keys in theme settings or code.**

### Privacy

Conversation state lives in `sessionStorage` only. Data is sent only to the store’s own MCP/UCP endpoints and, if configured, the merchant proxy.

## Installation

```bash
shopify theme push --store your-store.myshopify.com
# or upload the zip in Admin → Online Store → Themes
```

## Development

```bash
shopify theme dev --store your-store.myshopify.com
shopify theme check
```

## Theme Store notes

Re-verify against current Theme Store requirements before submission. Do not include `config/markets.json`. Run Lighthouse on a benchmark shop with real content.
