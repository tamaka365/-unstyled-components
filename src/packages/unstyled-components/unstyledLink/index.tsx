import { useCallback, forwardRef } from "react";

import { AnchorHTMLAttributes, MouseEvent } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  history: { push: Function; replace: Function };
  replace: Boolean;
}

/**
 * returns an unstyled Link compoonent
 * @param history - history 
 */
const UnstyledLink = forwardRef<HTMLAnchorElement, Props>(
  ({ children, href, history, replace, target, onClick, ...props }, ref) => {
    const handleClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>) => {
        if (target === "_blank") {
          return;
        }
        e.preventDefault();

        if (href) {
          if (replace) {
            history.replace(href);
          } else {
            history.push(href);
          }
        }

        onClick?.(e);
      },
      [history, href, onClick, replace, target]
    );

    return (
      <a
        onClick={handleClick}
        href={href || ""}
        target={target}
        {...props}
        ref={ref}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
