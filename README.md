# Tahaq-AI | تحقّق

Tahaq is an Arabic-first proof-of-concept for identifying potential cyber fraud in messages, screenshots and links. It helps users review warning signs before trusting a sender or sharing sensitive information.

## Problem and solution
Fraudulent messages can imitate legitimate organizations and use persuasive offers, urgency or familiar logos. Tahaq aims to extract relevant text and indicators, explain potential risks, and distinguish suspicious content from independently verified identities.

## Current MVP
- Arabic right-to-left browser interface.
- Text-based heuristic analysis of potential fraud indicators.
- Extraction of some phone numbers and links.
- Image upload and OCR interface, subject to browser and network availability.
- Explanations and an explicit unverified-identity status when official verification is unavailable.

## Technical choices and trade-offs
The prototype uses HTML, CSS and JavaScript for simple deployment and mobile accessibility. Its current fraud assessment is rule-based; it is not a trained AI fraud classifier. Browser OCR may require an external library and internet connectivity. The prototype does not query official government registries or provide live reputation checks. These limitations avoid implying verification that has not occurred.

## How to run
1. Download or clone this repository.
2. Open index.html in a modern browser, preferably through an HTTPS static hosting service.
3. Enter sample text and run the analysis.
4. For image scanning, allow the OCR component to load and check the extracted text before interpreting the result.

No API key is required for the current static demonstration. Internet access may be necessary for OCR dependencies.

## Privacy and security
Do not submit real passwords, OTP codes or sensitive personal information during demonstrations. The intended production design includes data minimization, explicit consent, secure transport, retention limits and authorized access to verification sources. These production safeguards and integrations are not implemented in this MVP.

## Planned improvements
- Validated AI fraud classification using representative labeled datasets.
- Independent official-identity and contact-channel verification through authorized APIs.
- Robust URL reputation and impersonation detection.
- iOS Shortcuts and Share Extension integration.
- Documented accuracy, false-positive and false-negative evaluation.

## Project team
Four collaborating team members share responsibility and decision-making. Any administrative contact designation does not imply sole ownership or project leadership.

## Additional documentation
See TECHNICAL_DOCUMENTATION.md, DEMO_SCRIPT_AR.md, TEAM_ROLES_AR.md and the PowerPoint presentation in this repository.

## Disclaimer
This is a hackathon proof-of-concept, not a certified cybersecurity product. An absence of detected warning signs must never be interpreted as proof of safety.
