export const researchPresentation: Record<string, { title: string; steps: string[]; related: string[] }> = {
  'digits-source-ledger-boundary': {
    title: 'Digits source-to-ledger model',
    steps: ['Source identity', 'Processing and matching', 'Ledger result'],
    related: ['campfire-journals-and-bank-feeds', 'xero-hybrid-mfe-and-reconciliation-boundaries', 'doss-workflow-data-boundary']
  },
  'campfire-journals-and-bank-feeds': {
    title: 'Campfire bank feeds and journals',
    steps: ['Bank event', 'Accounting decision', 'Journal and lines'],
    related: ['digits-source-ledger-boundary', 'xero-hybrid-mfe-and-reconciliation-boundaries', 'woocommerce-store-api-and-order-storage']
  },
  'doss-workflow-data-boundary': {
    title: 'DOSS workflows and shared data',
    steps: ['Shared record', 'Trigger and conditions', 'Recorded decision'],
    related: ['katana-inventory-quantities', 'campfire-journals-and-bank-feeds', 'notion-database-data-source-split']
  },
  'katana-inventory-quantities': {
    title: 'Katana inventory quantities',
    steps: ['Variant + location', 'On hand / committed / expected', 'Explicit availability model'],
    related: ['shiptheory-shipment-service-rules', 'woocommerce-store-api-and-order-storage', 'doss-workflow-data-boundary']
  },
  'shiptheory-shipment-service-rules': {
    title: 'Shiptheory shipment lifecycle',
    steps: ['Shipment description', 'Service selection', 'Booking and label result'],
    related: ['katana-inventory-quantities', 'shopify-graphql-cost-and-cursors', 'woocommerce-store-api-and-order-storage']
  },
  'shopify-graphql-cost-and-cursors': {
    title: 'Shopify GraphQL costs and cursors',
    steps: ['Query and cost budget', 'Page and pageInfo', 'Checkpoint and next cursor'],
    related: ['shopify-fall26-shop-mcp-and-wasi-cli', 'shopify-aquifer-river-agent-platform', 'klaviyo-revisions-and-rate-limits']
  },
  'klaviyo-revisions-and-rate-limits': {
    title: 'Klaviyo revisions and rate limits',
    steps: ['Endpoint + revision', 'Burst and steady windows', 'Classified outcome'],
    related: ['shopify-graphql-cost-and-cursors', 'notion-database-data-source-split']
  },
  'woocommerce-store-api-and-order-storage': {
    title: 'WooCommerce Store API and HPOS',
    steps: ['Storefront / merchant boundary', 'Supported order interface', 'Selected order storage'],
    related: ['shopify-fall26-shop-mcp-and-wasi-cli', 'katana-inventory-quantities', 'shiptheory-shipment-service-rules']
  },
  'notion-database-data-source-split': {
    title: 'Notion databases and data sources',
    steps: ['Database container', 'Selected source and schema', 'Pages and property values'],
    related: ['notebooklm-boq-rpc-surface-and-enterprise-boundary', 'shopify-graphql-cost-and-cursors', 'doss-workflow-data-boundary']
  },
  'shopify-aquifer-river-agent-platform': {
    title: 'Shopify Aquifer and River agent stack',
    steps: ['Append-only session log', 'Outside-sandbox Session Cell', 'Compiler + cross-model test oracle'],
    related: ['claude-code-projects-hearth-and-reply-gate', 'shopify-fall26-shop-mcp-and-wasi-cli', 'shopify-graphql-cost-and-cursors']
  },
  'shopify-fall26-shop-mcp-and-wasi-cli': {
    title: 'Shopify Fall ’26 Shop MCP and WASI CLI',
    steps: ['Discovery + Skills-over-MCP', 'Shop cart / checkout or SpendRequest', 'Confirmed payment or virtual card'],
    related: ['shopify-aquifer-river-agent-platform', 'shopify-graphql-cost-and-cursors', 'woocommerce-store-api-and-order-storage']
  },
  'xero-hybrid-mfe-and-reconciliation-boundaries': {
    title: 'Xero MFE shell and reconciliation boundary',
    steps: ['Identity + xero-tenant-id route', 'Public REST / MCP transaction write', 'Web-only bank statement match'],
    related: ['digits-source-ledger-boundary', 'campfire-journals-and-bank-feeds', 'schwab-treasury-and-brokerage-contract-boundaries']
  },
  'schwab-treasury-and-brokerage-contract-boundaries': {
    title: 'Schwab Trader API and Treasury boundary',
    steps: ['Public auction + fixed-income rules', 'Approved Trader API OAuth scope', 'Human-authorized brokerage execution'],
    related: ['xero-hybrid-mfe-and-reconciliation-boundaries', 'digits-source-ledger-boundary']
  },
  'claude-code-projects-hearth-and-reply-gate': {
    title: 'Claude Code Projects and Hearth runtime',
    steps: ['Overview coordinator + side sessions', 'hearthbot MCP + 6-tool reply gate', 'Sanitized <relay> + explicit consent'],
    related: ['capy-desktop-kappu-sidecar-and-effect-httpapi', 'grok-bot-sand-coordinator-and-vm-boundaries', 'shopify-aquifer-river-agent-platform']
  },
  'capy-desktop-kappu-sidecar-and-effect-httpapi': {
    title: 'Capy Desktop, kappu-macos and HttpApi',
    steps: ['Electron preload + Effect HttpApi', 'Captains, Crew and 6-scope Drives', 'kappu-macos sidecar + cloud VMs'],
    related: ['claude-code-projects-hearth-and-reply-gate', 'grok-bot-sand-coordinator-and-vm-boundaries']
  },
  'notebooklm-boq-rpc-surface-and-enterprise-boundary': {
    title: 'NotebookLM Boq RPCs and Enterprise API',
    steps: ['Boq Wiz 224-RPC web surface', 'Grounded citation + Studio artifacts', 'Enterprise Discovery Engine boundary'],
    related: ['antigravity-thinker-talker-voice-tunnel', 'notion-database-data-source-split']
  },
  'chatgpt-codex-quicksilver-webrtc-and-sonora-voice': {
    title: 'ChatGPT / Codex Quicksilver and Sonora voice',
    steps: ['2x catch-up buffer or Sonora AEC3', 'Quicksilver WebRTC intermediary', 'Backend Codex item promotion'],
    related: ['antigravity-thinker-talker-voice-tunnel', 'claude-code-projects-hearth-and-reply-gate']
  },
  'antigravity-thinker-talker-voice-tunnel': {
    title: 'Antigravity Thinker-Talker voice tunnel',
    steps: ['16 kHz boxcar capture -> /voice/ws', 'Talker stream <-> /voice/tunnel RPCs', '20 ms ramp barge-in + spokenChars'],
    related: ['chatgpt-codex-quicksilver-webrtc-and-sonora-voice', 'notebooklm-boq-rpc-surface-and-enterprise-boundary']
  },
  'grok-bot-sand-coordinator-and-vm-boundaries': {
    title: 'Grok Bot Sand coordinator and VM boundary',
    steps: ['Singleton coordinatorPort + ConnectRPC', 'Bots, Routines and Triggers', 'Firecracker VM + host-held OAuth'],
    related: ['claude-code-projects-hearth-and-reply-gate', 'capy-desktop-kappu-sidecar-and-effect-httpapi', 'signal-pqxdh-sealed-sender-and-linked-device-boundaries']
  },
  'signal-pqxdh-sealed-sender-and-linked-device-boundaries': {
    title: 'Signal PQXDH, Sealed Sender v2 and linked devices',
    steps: ['PQXDH + SPQR Triple Ratchet', 'Sealed Sender v2 + zkgroup', 'Primary vs linked-device sync'],
    related: ['discord-bootstrap-asar-gateway-v10-and-dave-mls', 'grok-bot-sand-coordinator-and-vm-boundaries', 'chatgpt-codex-quicksilver-webrtc-and-sonora-voice']
  },
  'discord-bootstrap-asar-gateway-v10-and-dave-mls': {
    title: 'Discord bootstrap ASAR, Gateway v10 and DAVE MLS',
    steps: ['Bootstrap ASAR + Rust discore', 'Gateway v10 + Components v2', 'DAVE MLS E2EE + Activities SDK'],
    related: ['signal-pqxdh-sealed-sender-and-linked-device-boundaries', 'chatgpt-codex-quicksilver-webrtc-and-sonora-voice', 'grok-bot-sand-coordinator-and-vm-boundaries']
  }
};
