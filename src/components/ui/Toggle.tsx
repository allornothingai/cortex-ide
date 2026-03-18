/**
 * Toggle - Cortex UI Design System Toggle Component
 * 
 * @deprecated Prefer importing CortexToggle from "@/components/cortex/primitives" for new code.
 * This wrapper delegates to CortexToggle while preserving the legacy API.
 */
import { JSX, splitProps, Show, createUniqueId } from "solid-js";
import { CortexToggle } from "../cortex/primitives/CortexToggle";

export interface ToggleProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  style?: JSX.CSSProperties;
  "aria-label"?: string;
}

export function Toggle(props: ToggleProps) {
  const [local] = splitProps(props, [
    "id", "checked", "onChange", "label", "description", "disabled", "size", "style", "aria-label"
  ]);

  const id = local.id || createUniqueId();

  return (
    <div style={{ display: "flex", "align-items": "center", gap: "10px", ...local.style }}>
      <CortexToggle
        id={id}
        checked={local.checked}
        onChange={local.onChange}
        disabled={local.disabled}
        size={local.size || "md"}
      />
      <Show when={local.label || local.description}>
        <div style={{ display: "flex", "flex-direction": "column", gap: "2px" }}>
          <Show when={local.label}>
            <label 
              for={id}
              style={{
                "font-size": "13px",
                color: "var(--cortex-text-primary)",
                "font-family": "var(--cortex-font-sans)",
                cursor: local.disabled ? "not-allowed" : "pointer",
              }}
            >
              {local.label}
            </label>
          </Show>
          <Show when={local.description}>
            <span style={{
              "font-size": "12px",
              color: "var(--cortex-text-secondary)",
              "font-family": "var(--cortex-font-sans)",
            }}>
              {local.description}
            </span>
          </Show>
        </div>
      </Show>
    </div>
  );
}
