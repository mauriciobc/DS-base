import { structureColors } from './colors';
import { spacing } from './spacing';
import { desktopBodySmall } from './typography';
import { shadows } from './shadows';

export const dropdownTokens = {
  card: {
    bg: structureColors.bgBase,
    borderColor: structureColors.borderColor,
    borderRadius: '16px',
    padding: {
      horizontal: spacing.rg, // 12px
      vertical: spacing.md, // 16px
    },
    shadow: shadows.popover, // 0 2px 8px rgba(0, 0, 0, 0.1)
  },
  item: {
    height: 46,
    padding: {
      left: spacing.lg, // 24px
      right: spacing.md, // 16px
      vertical: spacing.xs, // 4px
    },
    gap: spacing.md, // 16px
    borderBottom: '1px solid white',
  },
  arrow: {
    width: 24,
    height: 12,
    padding: spacing.lg, // 24px
  },
  typography: {
    title: desktopBodySmall.regular,
    subtitle: {
      fontFamily: desktopBodySmall.regular.fontFamily,
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 16,
    },
    overline: {
      fontFamily: desktopBodySmall.regular.fontFamily,
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 16,
    },
  },
  states: {
    hover: {
      bg: structureColors.bgBase,
    },
    selected: {
      bg: '#f8f9fa', // Cor de seleção baseada no design system
    },
    disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  spacing: {
    contentGap: spacing.xs, // 4px
    itemGap: 2, // 2px entre itens
    wrapperGap: spacing.rg, // 12px
  },
} as const;

export type DropdownTokens = typeof dropdownTokens;
