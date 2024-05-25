import cx from 'classnames';
import React, { FC } from 'react';

import { SocialLinksProps } from './SocialLinks.types';

import TelegramIcon from '@/shared/svg/telegram.svg';
import GitHubIcon from '@/shared/svg/github.svg';
import EmailIcon from '@/shared/svg/email.svg';
import InstagramIcon from '@/shared/svg/instagram.svg';

import { GITHUB_LINK } from '@/shared/constants/GITHUB_LINK';
import { TELEGRAM_LINK } from '@/shared/constants/TELEGRAM_LINK';
import { EMAIL_ADDRESS } from '@/shared/constants/EMAIL_ADDRESS';
import { INSTAGRAM_LINK } from '@/shared/constants/INSTAGRAM_LINK';

export const SocialLinks: FC<SocialLinksProps> = (props) => {
  const { className } = props;

  return (
    <ul
      className={cx(
        'flex',
        'uppercase',
        'tracking-wide',
        'text-xs',
        'md:space-x-6',
        'space-x-4',
        className
      )}
    >
      <li>
        <a
          className={cx('opacity-85', 'hover:opacity-100')}
          href={TELEGRAM_LINK}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Связаться со мной в Telegram"
        >
          <TelegramIcon className={cx('w-8', 'h-8')} />
        </a>
      </li>

      <li>
        <a
          className={cx('opacity-85', 'hover:opacity-100')}
          href={GITHUB_LINK}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Посмотреть мой код на GitHub"
        >
          <GitHubIcon className={cx('w-8', 'h-8')} />
        </a>
      </li>

      <li>
        <a
          className={cx('opacity-85', 'hover:opacity-100')}
          href={INSTAGRAM_LINK}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Посмотреть мои фотокарточки и написать мне в instagram"
        >
          <InstagramIcon className={cx('w-8', 'h-8')} />
        </a>
      </li>

      <li>
        <a
          className={cx('opacity-85', 'hover:opacity-100')}
          href={`mailto:${EMAIL_ADDRESS}`}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Написать мне по почте"
        >
          <EmailIcon className={cx('w-8', 'h-8')} />
        </a>
      </li>
    </ul>
  );
};
