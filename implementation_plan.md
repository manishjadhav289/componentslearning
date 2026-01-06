# Accordion Component Implementation Plan

## Goal Description
Create a reusable, animated Accordion component and a demonstration page for it. The accordion will allow users to expand and collapse content sections.

## Proposed Changes

### Components
#### [NEW] [Accordion.tsx](file:///home/administrator/Manish/componentslearning/components/Accordion.tsx)
- **Props**: `title` (string), `children` (ReactNode)
- **State**: `expanded` (boolean, shared value for Reanimated)
- **Logic**: 
  - Use `useSharedValue` for height/progress.
  - Use `withTiming` for smooth transitions.
  - render `Pressable` header with `Ionicons` (chevron-down/up).
  - render content in a masked view or overflow hidden view.

### App Screens
#### [NEW] [accordion/index.tsx](file:///home/administrator/Manish/componentslearning/app/accordion/index.tsx)
- A screen demonstrating multiple `Accordion` items.
- Examples: nested content, text content, etc.

#### [MODIFY] [app/(tabs)/index.tsx](file:///home/administrator/Manish/componentslearning/app/(tabs)/index.tsx)
- Add a navigation card/button to route to `/accordion`.

## Verification Plan

### Manual Verification
1.  Open the app.
2.  Click "Accordion Component" on the home screen.
3.  Verify navigation to the accordion demo page.
4.  Tap an accordion header.
5.  Verify smooth expansion of content.
6.  Verify icon rotation or change (chevron down -> up).
7.  Tap again to collapse.
8.  Verify smooth collapse.
