import { useNavigate } from "react-router-dom";

import UnstyledLink from "../../packages/unstyled-components/unstyledLink";

export default function Link({href}) {
  const navigate = useNavigate();

  return (
    <UnstyledLink
      history={{
        push: navigate,
        replace: (v) => navigate(v, { replace: true }),
      }}
      href={href}
    >
      baidu
    </UnstyledLink>
  );
}
