export interface ResearchPresentationEntry {
  title: string;
  steps: string[];
  related: string[];
  repo?: {
    url: string;
    label: string;
    description: string;
  };
  banner?: {
    light: string;
    dark: string;
    alt: string;
    caption: string;
  };
  diagram?: {
    src: string;
    alt: string;
    caption: string;
  };
  avatar?: {
    src: string;
    alt: string;
  };
}

export const researchPresentation: Record<string, ResearchPresentationEntry> = {
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
    related: ['shopify-agent-factories-walgit-and-verifiers', 'claude-code-projects-hearth-and-reply-gate', 'shopify-fall26-shop-mcp-and-wasi-cli', 'shopify-graphql-cost-and-cursors']
  },
  'shopify-fall26-shop-mcp-and-wasi-cli': {
    title: 'Shopify Fall ’26 Shop MCP and WASI CLI',
    steps: ['Discovery + Skills-over-MCP', 'Shop cart / checkout or SpendRequest', 'Confirmed payment or virtual card'],
    related: ['shopify-aquifer-river-agent-platform', 'shopify-graphql-cost-and-cursors', 'woocommerce-store-api-and-order-storage', 'yotpo-multi-plane-admin-email-gate-and-mcp']
  },
  'xero-hybrid-mfe-and-reconciliation-boundaries': {
    title: 'Xero MFE shell and reconciliation boundary',
    steps: ['Identity + xero-tenant-id route', 'Public REST / MCP transaction write', 'Web-only bank statement match'],
    related: ['digits-source-ledger-boundary', 'campfire-journals-and-bank-feeds', 'schwab-treasury-and-brokerage-contract-boundaries']
  },
  'schwab-treasury-and-brokerage-contract-boundaries': {
    title: 'Schwab Trader API and Treasury boundary',
    steps: ['Public auction + fixed-income rules', 'Approved Trader API OAuth scope', 'Human-authorized brokerage execution'],
    related: ['coinbase-advanced-trade-oauth-sandbox-and-scope-boundaries', 'xero-hybrid-mfe-and-reconciliation-boundaries', 'digits-source-ledger-boundary']
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
    related: ['chatgpt-codex-quicksilver-webrtc-and-sonora-voice', 'notebooklm-boq-rpc-surface-and-enterprise-boundary', 'freetpu-pixel-tensor-g5-baremetal-runtime']
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
  },
  'judgeme-metafield-ssr-and-open-web-publish': {
    title: 'Judge.me metafield SSR and open-web publish',
    steps: ['App Bridge + S3 presigned media', 'Dual-namespace metafield cache', 'SSR AI HTML + Postmark verify'],
    related: ['loox-shadow-dom-slots-and-photo-incentives', 'yotpo-multi-plane-admin-email-gate-and-mcp', 'shopify-graphql-cost-and-cursors']
  },
  'loox-shadow-dom-slots-and-photo-incentives': {
    title: 'Loox Shadow DOM slots and photo incentives',
    steps: ['5-step photo-first ugc-form', 'Single-use PriceRule + review_feed', 'Shadow DOM zero-XHR slot hydrate'],
    related: ['judgeme-metafield-ssr-and-open-web-publish', 'yotpo-multi-plane-admin-email-gate-and-mcp', 'shopify-fall26-shop-mcp-and-wasi-cli']
  },
  'yotpo-multi-plane-admin-email-gate-and-mcp': {
    title: 'Yotpo multi-plane admin, email gate and MCP',
    steps: ['3-plane admin + zero metafields', 'Email quarantine -> NLP publish', '3 Streamable HTTP MCP servers'],
    related: ['judgeme-metafield-ssr-and-open-web-publish', 'loox-shadow-dom-slots-and-photo-incentives', 'shopify-fall26-shop-mcp-and-wasi-cli']
  },
  'coinbase-advanced-trade-oauth-sandbox-and-scope-boundaries': {
    title: 'Coinbase Advanced Trade, OAuth MCP and sandbox',
    steps: ['ES256 view-only / OAuth MCP', 'Preview + cursor/decimal quirks', 'Spot vs derivatives/wallet fence'],
    related: ['coinbase-mcp-app-sep1865-and-skybridge', 'webull-cloud-mcp-instructions-and-openapi', 'schwab-treasury-and-brokerage-contract-boundaries', 'xero-hybrid-mfe-and-reconciliation-boundaries']
  },
  'freetpu-pixel-tensor-g5-baremetal-runtime': {
    title: 'FreeTPU: Pixel Tensor G5 bare-metal runtime & llama.cpp',
    steps: ['DGC0 + VLIW ISA compile-diff recovery', 'Litebuf VII + libopenbuenos zero-.so runtime', 'Dynamic param_slice LLM + W8A16 (BF16) GEMM'],
    related: ['pixel-11-pro-fold-tensor-g6-sme2-and-vulkan', 'android-avf-terminal-pkvm-vsock-and-bounds', 'antigravity-thinker-talker-voice-tunnel', 'claude-code-projects-hearth-and-reply-gate'],
    repo: {
      url: 'https://github.com/saariuslystoned/freetpu',
      label: 'saariuslystoned/freetpu',
      description: 'Apache-2.0 clean-room C++17 runtime (libopenbuenos), closed-form VLIW ISA specs, and llama.cpp EDGETPU backend.'
    },
    banner: {
      light: '/media/freetpu/banner-light.jpg',
      dark: '/media/freetpu/banner-dark.jpg',
      alt: 'FreeTPU mascot and Pixel Tensor G5 4x4 SNAKE_16 open silicon banner',
      caption: 'FreeTPU open-source runtime & VLIW ISA — Apache-2.0 companion repository on GitHub'
    },
    diagram: {
      src: '/media/freetpu/architecture-diagram.svg',
      alt: 'FreeTPU zero-vendor-.so execution pipeline from ggml-edgetpu through libopenbuenos and Litebuf VII to /dev/edgetpu-soc and the 4x4 serpentine PE mesh',
      caption: 'Execution pipeline · ggml-edgetpu -> libopenbuenos -> Litebuf VII -> /dev/edgetpu-soc -> 4x4 PE Mesh'
    },
    avatar: {
      src: '/media/freetpu/avatar-512x512.png',
      alt: 'FreeTPU mascot'
    }
  },
  'numeral-sales-tax-engines-and-sst-boundaries': {
    title: 'Numeral dual tax engines, CCH Plus4 and nexus splits',
    steps: ['CCH Plus4 / ZIP+4 / SST boundary resolve', 'Minor-cent ROUND_HALF_UP + largest-remainder alloc', 'Post-order Shopify vs direct checkout & filing'],
    related: ['zamp-gis-tax-calculation-and-non-sst-model', 'stripe-tax-calculations-codes-and-monitoring', 'taxjar-smartcalcs-precision-and-sync-queues']
  },
  'zamp-gis-tax-calculation-and-non-sst-model': {
    title: 'Zamp non-SST tax calculation, GIS lookup and rounding',
    steps: ['Smarty / raw lat-lon / 1,400 boundary ZIPs', '4dp line + 8dp taxes[] -> 2dp taxDue', 'Non-SST registrations + CO SUTS / AK ARSSTC'],
    related: ['numeral-sales-tax-engines-and-sst-boundaries', 'stripe-tax-calculations-codes-and-monitoring', 'taxjar-smartcalcs-precision-and-sync-queues']
  },
  'stripe-checkout-settlement-and-remote-mcp': {
    title: 'Stripe Checkout settlement, CE 3.0 disputes and Remote MCP',
    steps: ['CheckoutSession / manual auth vs Settlement', 'BalanceTransaction -> Payout + 45d refund limit', 'Raw-byte HMAC / v2 thin + mcp.stripe.com gate'],
    related: ['stripe-tax-calculations-codes-and-monitoring', 'gusto-single-company-oauth-gl-and-mcp', 'shopify-graphql-cost-and-cursors']
  },
  'stripe-tax-calculations-codes-and-monitoring': {
    title: 'Stripe Tax txcd codes, ZIP fallback and ledger traps',
    steps: ['head_office + active registration + txcd_*', 'Rooftop vs 5-digit ZIP centroid (ZIP+4 ignored)', 'Invoice finalization lock + create_reversal ledger'],
    related: ['stripe-checkout-settlement-and-remote-mcp', 'numeral-sales-tax-engines-and-sst-boundaries', 'zamp-gis-tax-calculation-and-non-sst-model']
  },
  'taxjar-smartcalcs-precision-and-sync-queues': {
    title: 'TaxJar SmartCalcs floats, Woo overrides and county gaps',
    steps: ['MD5 cart cache -> POST /v2/taxes float response', '12h nexus transient + global option override', '20m ActionScheduler sync + county-name FIPS gap'],
    related: ['numeral-sales-tax-engines-and-sst-boundaries', 'zamp-gis-tax-calculation-and-non-sst-model', 'woocommerce-store-api-and-order-storage']
  },
  'gusto-single-company-oauth-gl-and-mcp': {
    title: 'Gusto single-company OAuth mutexes, GL clearing and MCP',
    steps: ['Single-company OAuth + mutexed single-use refresh', 'Prepare / Calculate / Submit -> $0.00 GL clearing', 'Receipt vs ACH split + 72-tool scoped Remote MCP'],
    related: ['xero-hybrid-mfe-and-reconciliation-boundaries', 'digits-source-ledger-boundary', 'stripe-checkout-settlement-and-remote-mcp']
  },
  'shopify-new-customer-accounts-oidc-and-mcp': {
    title: 'Shopify Customer Accounts OTP SPA, DPoP OIDC and MCP',
    steps: ['.well-known discovery -> hosted OTP/Consent SPA', 'PKCE S256 + RFC 9449 DPoP + CIMD tokens', 'Customer GraphQL 2026-10, mcp_api & sso=silent'],
    related: ['shopify-fall26-shop-mcp-and-wasi-cli', 'smile-io-rolldown-modules-tokens-and-ledger', 'shopify-graphql-cost-and-cursors']
  },
  'bundler-product-bundles-js-engine-and-checkout-modes': {
    title: 'Bundler AJAX cart interception and 3 checkout modes',
    steps: ['Idempotent bundler.js -> 963 KB widget engine', 'Component SKU /cart/add.js (zero virtual stock)', 'Draft Order vs Promo Code vs 25-limit Auto Discount'],
    related: ['shopify-graphql-cost-and-cursors', 'smile-io-rolldown-modules-tokens-and-ledger', 'judgeme-metafield-ssr-and-open-web-publish']
  },
  'smile-io-rolldown-modules-tokens-and-ledger': {
    title: 'Smile.io Rolldown ESM widgets, JWT exchange and ledger',
    steps: ['24 Rolldown ESM chunks + platform.smile.io iframe', '5m HS256 JWT exchange + HMAC webhooks', 'Append-only PointsTransaction + store-credit tender gap'],
    related: ['shopify-new-customer-accounts-oidc-and-mcp', 'bundler-product-bundles-js-engine-and-checkout-modes', 'yotpo-multi-plane-admin-email-gate-and-mcp']
  },
  'scrcpy-virtual-display-uhid-and-wire-protocol': {
    title: 'scrcpy v5.0.1 virtual displays, UHID isolation and wire framing',
    steps: ['ADB reverse + UID 2000 drop + CleanUp sidecar', 'OWN_DISPLAY_GROUP + physical panel off + H.264/HEVC', 'API 35 UHID display binding + 22 ControlMessages'],
    related: ['android-avf-terminal-pkvm-vsock-and-bounds', 'pixel-11-pro-fold-tensor-g6-sme2-and-vulkan', 'freetpu-pixel-tensor-g5-baremetal-runtime']
  },
  'android-avf-terminal-pkvm-vsock-and-bounds': {
    title: 'Android AVF Terminal pKVM hypervisor, vsock and 24h cap',
    steps: ['pKVM + ConfigJson -> VirtualMachineConfig', 'ForwarderHost JNI vsock + gfxstream + ttyd bridge', '1,440m KeepAwakeDuration cap + zero USB passthrough'],
    related: ['pixel-11-pro-fold-tensor-g6-sme2-and-vulkan', 'scrcpy-virtual-display-uhid-and-wire-protocol', 'freetpu-pixel-tensor-g5-baremetal-runtime']
  },
  'pixel-11-pro-fold-tensor-g6-sme2-and-vulkan': {
    title: 'Pixel 11 Pro Fold Tensor G6 SME2, Vulkan 1.4 and Darwinn',
    steps: ['7-core ARMv9 SME2 + PowerVR Vulkan 1.4 BDA', 'NNAPI AIDL V4 speedups vs EfficientDet 60s timeout', '74 AppFunctions + AVF 24h cap + 80% docked guard'],
    related: ['freetpu-pixel-tensor-g5-baremetal-runtime', 'android-avf-terminal-pkvm-vsock-and-bounds', 'scrcpy-virtual-display-uhid-and-wire-protocol']
  },
  'jetpack-autoloader-shared-connection-and-mcp': {
    title: 'Jetpack 16.4 autoloader arbitration, shared tokens and MCP',
    steps: ['plugins_loaded highest-semver Composer binding', 'Shared blog_token + Protected_Owner + Safe Mode IDC', 'Default-off WP Abilities + 470-tool MCP governance'],
    related: ['woocommerce-store-api-and-order-storage', 'taxjar-smartcalcs-precision-and-sync-queues', 'zamp-gis-tax-calculation-and-non-sst-model']
  },
  'gcp-cloudshell-wss-ssh-and-gcloud-mcp': {
    title: 'GCP Cloud Shell WebSocket-SSH, agy CLI and gcloud-mcp deny',
    steps: ['Discovery + OIDC -> cloudshell v1 environment start', 'WSS-SSH bearer tunnel + 28m AuthorizeEnvironment loop', 'gcloud-mcp 10-cmd default_deny + Model Armor guard'],
    related: ['antigravity-thinker-talker-voice-tunnel', 'notebooklm-boq-rpc-surface-and-enterprise-boundary', 'shopify-agent-factories-walgit-and-verifiers']
  },
  'coinbase-mcp-app-sep1865-and-skybridge': {
    title: 'Coinbase MCP App & SEP-1865 host sandbox boundaries',
    steps: ['Triple _meta + inline HTML across 3 desktop hosts', '_meta confirmationToken + visibility=["app"] execute', 'check_status idempotency + Skybridge vs SEP-1865'],
    related: ['coinbase-advanced-trade-oauth-sandbox-and-scope-boundaries', 'webull-cloud-mcp-instructions-and-openapi', 'antigravity-thinker-talker-voice-tunnel']
  },
  'webull-cloud-mcp-instructions-and-openapi': {
    title: 'Webull Cloud MCP confirmation instructions and OpenAPI splits',
    steps: ['OAuth 2.1 PKCE/DCR -> place_*_instruction + jump_url', '72h App/Desktop Place Order + zero dedup polling', 'Non-Trading write hazard + 32-char client_order_id'],
    related: ['coinbase-mcp-app-sep1865-and-skybridge', 'coinbase-advanced-trade-oauth-sandbox-and-scope-boundaries', 'schwab-treasury-and-brokerage-contract-boundaries']
  },
  'shopify-agent-factories-walgit-and-verifiers': {
    title: 'Shopify Nov 2026 factories, walgit TLA+ specs and deepsec',
    steps: ['walgit Rust + 164 TLA+ cases + VOPR simulation', 'Reflex / Helix / TPI judge / deepsec refusal audit', 'pi 1.6.0 RPC + UCP ask_business + Dec/Jan app gates'],
    related: ['shopify-aquifer-river-agent-platform', 'shopify-fall26-shop-mcp-and-wasi-cli', 'shopify-new-customer-accounts-oidc-and-mcp', 'gcp-cloudshell-wss-ssh-and-gcloud-mcp']
  }
};
