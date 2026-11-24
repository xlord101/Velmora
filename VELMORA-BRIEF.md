# Velmora Design Studio

## Portfolio website · Product requirements and design handoff

**The first impression.** A warm beige monogram sits on a dark burgundy field. Its central V lifts as the two fine outer strokes drop. Through that opening, the visitor sees a wall of interiors already composed like architectural photographs. Adjacent columns drift in opposite directions. The studio name and the link to its work hold still. One scroll brings the visitor close enough to study a single room.

**The product.** A prospective client should be able to recognise Velmora’s work, understand what the studio could do for their space, and begin a conversation. The homepage offers a guided visit. Individual project URLs let someone share one room with a partner or return directly to a project they remember.

### What informed the brief

| Input | How to use it |
|---|---|
| Business-card photograph | Use its printed reds, warm lettering and contrast between ink and paper. The pictured pottery business, wording and contact details belong to the reference. |
| Both supplied Artboard PNGs | Use the actual three-part symbol as the master silhouette. The thin outer strokes, uneven stroke weights and serif feet matter at every size. |
| Local `skiper30.tsx` | Adapt the four-column image composition. Its current position responds to page scroll. Continuous, alternating travel is the Velmora change. |
| [Snog Productions](https://www.snogproductions.com/) | Direction for a brief, decisive brand entrance. The page was accessible, but the loader’s frame sequence was unavailable. The timing below is original to Velmora. |
| [Maison Atelier reference](https://mkmedia-test.com/) | Its visible sequence is introduction, disciplines, selected work, studio, process, press, enquiry and footer. Keep that reading order. Let actual Velmora material determine the length of each chapter. |
| Supplied skills catalogue | Use the relevant design, motion and review entries at the milestones below. The catalogue is a reference library. |

## 1 · Product decisions

**Primary visitor.** Someone considering an interior project, often arriving on a phone via a shared link. They want to see a room clearly, find out what was designed and decide whether to get in touch. A returning visitor should be able to reach the enquiry section directly.

| Priority | Visitor need | Acceptance |
|---|---|---|
| Launch | Recognise the studio and see its design work immediately | First viewport includes the name, interior-design descriptor, renders and a visible “View projects” link. |
| Launch | Explore a specific interior | Selecting its image or title opens a shareable page with real project context and images at a useful scale. |
| Launch | Understand the offer | Services state what the client receives. Process explains where their input is needed. Both use studio-approved language. |
| Launch | Contact the studio | “Start a project” reaches a working enquiry channel from home and each case study. Delivery is tested with the studio. |
| Content-dependent | Evaluate third-party recognition | Publish a credited press excerpt or approved client quote only once supplied. Collapse the section and its links otherwise. |

**Success measures.** In a pre-launch walkthrough, a first-time visitor can name the practice, open a project and reach contact without coaching. After launch, if measurement is enabled, count project opens, enquiries started and confirmed deliveries. Review project-to-enquiry journeys alongside the studio’s assessment of enquiry quality. Establish a baseline before setting conversion targets. Keep message text and contact details out of analytics.

## 2 · Page map and reading experience

Global navigation reads **Work · Studio · Process · Start a project**. The mark links home. Home anchors are `/#work`, `/#studio`, `/#process` and `/#enquire`. Use the same destinations from project pages. On phones keep the monogram, “Enquire” and a labelled menu button visible. Its panel includes the same links, supports Escape, returns focus on dismissal and closes when a destination is selected.

| Chapter | Desktop composition | Phone composition and action |
|---|---|---|
| Opening and hero | Full-bleed render wall behind a slim burgundy masthead. Anchor a solid burgundy title block to the lower left, about five of twelve columns wide. Set “Velmora” large, then “Interior design studio” and an underlined “View projects” link. Leave the right half open for the rooms. | Two generous image columns. Keep the title block at lower left in document flow so all text fits at zoom. Place the wall’s pause control in the opposite upper corner below the masthead. |
| Services | Beige ground. Set “What we design” in the left third. Across the remaining width, use ruled rows pairing a confirmed service with a plain-language deliverable. A single detail render alongside the list gives the work scale. | Section heading, rows, then image. Visitors can read the offer without tapping. A one-service studio gets one clear paragraph. |
| Selected work | Lead with one large landscape render spanning eight columns. Align the project name and a one-sentence design decision with its lower edge in the remaining four. Follow with an offset pair, one wide room view and one tight detail. | One project per row. Keep the caption visible under the image. Image and title form one link. Show “3D visualisation” wherever otherwise ambiguous. |
| Studio | Switch to lighter burgundy with beige type. Pair an approved portrait, desk photograph or working drawing with a short first-person studio note. Ask the designer to describe a detail they look for when first entering a space. | Image above copy. If a studio photo is pending, give the note the full width. |
| Process | Return to beige. Use a narrow heading column and a wider sequence of stages. For each approved stage show the client’s question, what the studio does and what the client sees next. A drawing can illustrate one stage. | Show stage headings and explanations inline. Draft sequence for studio review runs from first conversation through concept, design development and agreed handover. Confirm site involvement before publication. |
| Recognition, if available | One signed quotation with source and permission. Link the original publication where available. | Keep quote and attribution together. Without approved material, process leads straight to enquiry. |
| Enquiry and footer | A dark burgundy closing spread. “Tell us about your space” sits opposite a short form. Repeat the studio name, confirmed email and available social link below a single rule. | Stack copy, fields, submit and a selectable email address. Keep native input and keyboard behaviour. |

**Project detail · `/work/[slug]`.** Open on the project title, confirmed location at the permitted level of detail, and status such as “Concept study” or “Completed interior”. Follow a wide establishing image with the client brief, one design constraint, the studio’s response and a close-up that demonstrates it. For example, a joinery paragraph belongs beside the image where the joint can be seen. Close with credits, next project and “Discuss a similar space”. With one project, use “All work” in place of “Next project”. Browser Back should return to the originating gallery position.

## 3 · Visual system

### Colour and type

| Design token | Screen colour | Role |
|---|---|---|
| `--burgundy-deep` | `#4E1D24` | Sampled from the lower card. Intro field, masthead, title block, primary ink on beige and enquiry background. |
| `--burgundy-light` | `#62302F` | Sampled from the lit upper card. Studio spread, secondary text on beige and tonal detail on the deep red. |
| `--beige` | `#F2DFCB` | Proposed warm paper colour. The photograph’s bright lettering samples around peach `#FEDCCE`. This slightly quieter beige works across a whole page. |

Use beige type on either burgundy. Reserve burgundy-on-burgundy for decorative embossing. Keep text on opaque surfaces so its contrast is independent of the render. Preserve the actual colours of materials in the images.

**Display type.** Use **Baskervville Regular** for the studio name, section headings and project titles. Its fine serifs pick up the hairlines in the symbol. Set “Velmora” in title case as live text unless the studio supplies an official wordmark. Keep the actual monogram as artwork. Start the hero at `clamp(3.25rem, 7.5vw, 7.5rem)`, line-height 1.02, tracking −0.035em. Let long project names wrap at natural word breaks.

**Reading type.** Use **Instrument Sans** Regular and Medium for navigation, text, captions and forms. Set body text at 17–19px with 1.55 leading and a 55–65 character measure. Use 14px captions, 16px minimum inputs, sentence case and medium weight for actions. Self-host licensed WOFF2 files, use swap and test Georgia/Arial fallbacks on slow loads.

### Grid and imagery

At 1200px and above use 12 columns, 24px gutters, outer margins of 5vw and a 1600px content cap. From 768px use eight columns and 32px margins. Below 768px use four columns, 16px gutters and 20px margins. Hero imagery bleeds to the viewport edge. Allow roughly 96–144px between desktop chapters and 56–80px on phones. Use square image edges, fine rules and generous caption spacing.

At 1440px the first still should show at least one recognisable room from floor to ceiling, with the strongest view in the uncovered right half. Place a material or furniture detail behind the title-block area. At 390px choose a fresh crop around the room’s focal point. Keep architectural verticals straight. Pair establishing shots with details of the same project so the viewer can connect material choices to the room.

## 4 · Motion specification

### Logo entrance

Use the supplied artboard to create a transparent, tightly cropped SVG with three named groups sharing one viewBox. Prefer the studio vector when available. For a raster-derived version, isolate each connected black silhouette separately and compare their recombined outline against the original at 1× and 4×. The central tip must retain its position between the two feet. Set the assembled symbol approximately 120px tall on phones and 176px on desktop.

| From first paint | What the visitor sees |
|---|---|
| 0–180ms | The assembled beige mark rests in the centre of the deep burgundy field. The first hero image loads underneath. |
| 180–780ms | Inside a clipped window the height of the assembled mark, translate the middle V up by 110% of the window height and both side pieces down by the same distance. Move them together on `cubic-bezier(.77,0,.175,1)`. Retain their horizontal alignment. |
| 480–900ms | Fade the burgundy field to reveal the composed hero. Leave the masthead and hero text in their final positions. |
| 900ms onward | Remove the overlay and begin the slow gallery drift. The small header monogram stays assembled. |

Play once per tab session on a direct homepage arrival. Bypass on hash links, project URLs, history restoration and reduced-motion preference. Dismiss on first scroll, touch or keyboard navigation and let that input reach its destination. Use a decorative pointer-transparent overlay with a bounded CSS end state. The default HTML is a complete, visible hero even if scripts fail or media takes longer than the intro.

### Render wall · adapting Skiper 30

1. Retain the cropped viewport, independent vertical columns and staggered starting views. Extract the gallery from the demo’s `main`, remove both full-screen spacer sections and replace the 175vh demo viewport with a hero of roughly 90–100svh. Give the hero a content-driven minimum height on short screens.
2. Replace hard-coded Lummi paths and repeated third/fourth column content with ordered image IDs from the project data. Support four columns on wide screens, three on tablets and two on phones. Reserve image box dimensions before loading. Use 12px desktop and 6px mobile seams. Mix a 4:5 portrait crop with a 4:3 room view in each column.
3. Replace `useScroll`, four positive `useTransform` mappings and the per-window height state with one linear CSS track animation per column. Reading left to right, directions are **up, down, up, down**. Start near 16 CSS px/s desktop and 10px/s mobile. The direction is autonomous and independent of page scroll.
4. Build each track from two identical groups. Each group includes its trailing gutter and is at least as tall as the clipping viewport. Repeat source tiles inside a group if needed to reach that height. Stack the two groups without an extra gap. Translate the track from 0 to −50% for upward travel and reverse for downward travel. Duration in seconds equals one group’s height in pixels divided by speed. Measure after layout and on container resize. Negative animation delays stagger initial views. Inspect the wrap through two full cycles.
5. Keep title, links and controls in a sibling overlay. The moving images are decorative with empty alt text and an accessibility-hidden track. Provide descriptive alt text and links for the same work in the static portfolio. A visible “Pause gallery” button toggles to “Play gallery” and freezes the current frame. Preserve the manual pause on return. Stop animation while offscreen or in a hidden tab.
6. With reduced motion, show a deliberately composed still. With one usable image, show it full bleed. With zero, use a burgundy typographic hero in development and flag missing imagery for launch. During asset collection, use labelled position blocks in preview. Real work enters through the manifest.
7. Remove the component-local Lenis instance and its recursive animation frame. Its current cleanup only removes the resize listener. Use native document scrolling, smooth same-page anchors and `scroll-margin-top` for the masthead. Switch anchors to instant travel with reduced motion. Wheel, touch, scrollbar, find-in-page and keyboard navigation retain normal control.

Preserve the supplied component’s author and usage comment. Its free-use terms in the file call for Skiper UI attribution. Include a linked implementation credit in the footer credits for that version.

## 5 · Implementation and content contract

**Build assumption.** The workspace contains assets and a React component. For a fresh build use Next.js App Router, TypeScript, statically rendered portfolio pages and CSS for layout and motion. Keep the gallery controls, intro session handling and enquiry submission as small interactive components. A CMS can later feed the same content fields.

| Source of truth | Required fields and behaviour |
|---|---|
| Studio | Display name, descriptor, service list, approved studio note, process stages and destination email. Location, social links, phone, portrait and recognition are optional. Omit empty fields from the UI. |
| Project | Stable slug, title, status, scope, brief, design response, cover image ID and ordered gallery IDs. Optional location, year, collaborators, material notes and credits. A draft/published flag controls routes, home listings and sitemap together. |
| Image | Stable ID, source path, intrinsic width/height, descriptive alt, caption, project ID, media type (render/photo/drawing), desktop and mobile focal points, credit and publication approval. |
| Hero | Ordered groups of image IDs or curated per-breakpoint lists. Keep the leading view explicit so editing a case study cannot accidentally change the first impression. |

**Asset request for the studio.** Request an original vector, one approved studio introduction, accurate service scope, monitored contact address and one complete project first. For each additional project ask for a wide room view, a reverse angle, a close-up, a sentence about the brief and a sentence about a decision visible in the images. Request full-resolution originals and preferred crop points. Generate responsive AVIF/WebP sizes, keep intrinsic aspect ratios and prioritise only the initial dominant image. Load secondary and below-fold media progressively.

**Enquiry contract.** Require name, reply email and “Tell us about your space”. Make location and project type optional. Keep visible labels, field-specific errors and entered values on retry. Submit to a server endpoint that validates lengths and address format, throttles repeated submissions and sends to the configured studio inbox. Disable duplicate submission while pending. Show “Enquiry received” only after the delivery service accepts it. On failure, re-enable submit and show the confirmed studio email. Verify inbox receipt in staging. If delivery integration is pending, launch with a plainly labelled email link and visible address.

**Search and sharing.** Give every public project a distinct page title, description, canonical URL and share image. Use one H1 per page, descriptive image captions, an accessible navigation landmark, and a sitemap of published routes. Draft assets and draft case studies stay out of public builds.

## 6 · Build sequence for the IDE

| Milestone | Work | Exit check |
|---|---|---|
| 1. Content and still composition | Create studio/project manifests, palette and type tokens. Build homepage and one case study in static HTML/React using approved assets or labelled preview blocks. Use the catalogue’s `design-taste-frontend` for the art-direction pass. | Compare first viewport and one project spread at 1440px and 390px. Room, studio name and work link are recognisable without motion. |
| 2. Brand entrance | Prepare the three-part mark, implement the timeline, skip conditions and fallback. | View at normal speed and quarter speed. The V rises cleanly while the two feet descend together. Direct project links open immediately. |
| 3. Living gallery | Refactor the supplied component, wire content-driven crops and implement pause and visibility handling. Use `review-animations` from the catalogue on this implementation. | Record two complete cycles on desktop and phone. Check direction, joins, first paint, page scrolling and manual pause after tab switching. |
| 4. Portfolio and enquiry | Complete approved sections, project URLs, metadata, form delivery and fallback. | Navigate from a shared case study to enquiry with keyboard and touch. Confirm an actual test message reaches the intended inbox. |
| 5. Release review | Run the catalogue’s `accesslint-scan` and `web-performance-optimization` workflows where installed. Inspect the production build with real image sizes. | Pass the checks below, replace preview material, obtain studio approval for images and copy, and verify deployed links and form delivery. |

**IDE starter prompt**

> Read VELMORA-BRIEF.md and inspect the local skiper30.tsx and both Artboard PNGs. Implement milestone 1 first. Use one project manifest for the hero, selected work and project routes. Provide a desktop and phone preview of the still composition. Use labelled preview blocks for missing renders and explicit draft fields for missing studio information. Then implement the three-part intro and alternating gallery following the motion specification. Check each milestone against its exit condition.

### Release checklist

- Test at 320, 390, 768, 1024 and 1440px, phone landscape and 200% browser zoom. The title, navigation, captions and controls must remain readable without horizontal page scroll.
- Test a first visit, reload, back/forward navigation, an anchored URL, denied session storage, slow first image, failed image and JavaScript disabled. Reading, project links and contact details must remain available.
- Test keyboard-only navigation, visible focus, skip-to-content, menu dismissal, labelled controls, form errors and reduced motion. Aim for 4.5:1 contrast for regular text and 3:1 for large text. Give touch controls at least a 44px hit area.
- On a mid-range phone, scroll while the gallery is moving. Check for dropped frames, layout jumps and unnecessary offscreen work. Performance targets for production are LCP ≤2.5s, CLS ≤0.1 and INP ≤200ms at the 75th percentile when field data is available. Use throttled lab runs for pre-launch diagnostics.
- Test one long project name, missing location, a single project, portrait and landscape crops, and an empty optional section. Every published project should have a meaningful cover and a working contact path.
- Before go-live, obtain the studio’s chosen renders, publication permissions, service descriptions, project statuses and contact destination. Confirm the proposed palette and type pairing against the studio’s intended identity on an actual phone display.
