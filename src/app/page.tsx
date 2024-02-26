import cx from 'classnames';
import Image from 'next/image';

import { Nav } from '@/shared/components/Nav';
import { Link } from '@/shared/ui/typography/Link';
import { Title } from '@/shared/ui/typography/Title';
import { Paragraph } from '@/shared/ui/typography/Paragraph';
import { ParagraphGroup } from '@/shared/ui/typography/ParagraphGroup';

const Home = () => {
  return (
    <div>
      <header
        className={cx('flex', 'flex-col', 'lg:flex-row', 'lg:items-center')}
      >
        <a
          className={cx(
            cx(
              'mb-4',
              'lg:mb-0',
              'flex',
              'shrink-0',
              'mr-4',
              'md:mr-6',
              'lg:mr-12'
            )
          )}
          href="/"
        >
          <Image
            className={cx(
              'h-10',
              'w-10',
              'md:h-12',
              'md:w-12',
              'lg:h-20',
              'lg:w-20',
              'rounded-full'
            )}
            src="/igornerusin.png"
            alt="Igor Nerusin"
            width={400}
            height={400}
          />
        </a>

        <div>
          <a
            className={cx(
              'block',
              'mb-3',
              'lg:mb-4',
              'text-eerie-black',
              'dark:text-white',
              'no-underline',
              'font-bold',
              'text-xl',
              'lg:text-3xl',
              'font-extrabold',
              'leading-none',
              'lg:leading-tight'
            )}
            href="/"
          >
            Игорь Нерусин
          </a>

          <Nav
            items={[
              {
                text: 'Статьи',
                href: '/articles',
                isUnreleased: true,
              },
              {
                text: 'Проекты',
                href: '/projects',
                isUnreleased: true,
              },
            ]}
          />
        </div>
      </header>

      <div className={cx('lg:ml-32', 'mt-12', 'max-w-screen-sm')}>
        <Title type="h1">Who the hell am I?</Title>

        <ParagraphGroup>
          <Paragraph>
            Я{' '}
            <Link href="https://t.me/igoryusha22" isExternal>
              @igoryusha22
            </Link>
            , senior <span className={cx('line-through')}>fullstack</span>{' '}
            frontend разработчик, муж, отец прекрасного{' '}
            <Link
              className={cx('')}
              href="https://instagram.com/jonylongdog"
              isExternal
            >
              🐕 Jony
            </Link>
            , фантазер-мечтатель.
          </Paragraph>

          <Paragraph>
            Мне 22 года, я без высшего образования, чему несказанно рад, потому
            что мое образование – это чистый опыт и крутая профессия.
          </Paragraph>

          <Paragraph>
            <span className={cx('line-through')}>
              Время от времени веду блог, где рассказываю о проблемах и сложных
              темах с которыми я сталкивался на моем пути инженера и тимлида.
            </span>
          </Paragraph>

          <Paragraph>
            Не боюсь legacy, ищу вызовы, хочу неизвиданное{' '}
            <span className={cx('line-through')}>и много денег</span>.
          </Paragraph>

          <Paragraph>
            Сейчас я{' '}
            <span className={cx('line-through')}>
              перебираюсь на темную сторону
            </span>{' '}
            постигаю дзен go разработки,{' '}
            <span className={cx('line-through')}>
              туплю на{' '}
              <Link href="https://leetcode.com/" isExternal>
                leetcode.com
              </Link>
            </span>{' '}
            тренирую себя на алгоритмах, бегаю на дорожке... и, конечно, щупаю
            ml – потому что кто знает, может, однажды машинное обучение научит
            меня, как зарабатывать больше футболистов сидя за{' '}
            <span className={cx('line-through')}>ноутбуком</span> macbook’ом...
          </Paragraph>
        </ParagraphGroup>
      </div>
    </div>
  );
};

export default Home;
