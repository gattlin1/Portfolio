import React from 'react';
import Logo from '../Logo';

interface GitHubLogoProps {
  url: string;
}

function GitHubLogo({ url }: GitHubLogoProps) {
  return (
    <Logo className='github-logo' url={url}>
      <i className='fab fa-github'></i>
    </Logo>
  );
}

export default GitHubLogo;
