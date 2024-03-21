import cx from 'classnames';

import { Link } from '@igoryusha22/promo-ui/Link';
import { Text } from '@igoryusha22/promo-ui/Text';
import { TextGroup } from '@igoryusha22/promo-ui/TextGroup';

const Home = () => {
  return (
    <main>
      <Text className="block mb-4" size="2xl" weight="black">
        Who the hell am I?
      </Text>

      <TextGroup>
        <Text as="p" size="lg">
          Я{' '}
          <Link
            variant="solid"
            weight="bold"
            href="https://t.me/igoryusha22"
            isExternal
          >
            @igoryusha22
          </Link>
          , senior <span className={cx('line-through')}>fullstack</span>{' '}
          frontend разработчик, муж, отец прекрасного{' '}
          <Link
            variant="solid"
            weight="bold"
            href="https://instagram.com/jonylongdog"
            isExternal
          >
            🐕 Jony
          </Link>
          , фантазер-мечтатель.
        </Text>

        <Text as="p" size="lg">
          Мне 22 года, я без высшего образования, чему несказанно рад, потому
          что мое образование – это чистый опыт и крутая профессия.
        </Text>

        <Text as="p" size="lg">
          Время от времени веду{' '}
          <Link variant="solid" weight="bold" href="/articles">
            блог
          </Link>
          , где рассказываю о проблемах и сложных темах с которыми я сталкивался
          на моем пути инженера и тимлида.
        </Text>

        <Text as="p" size="lg">
          Не боюсь legacy, ищу вызовы, хочу неизвиданное{' '}
          <span className={cx('line-through')}>и много денег</span>.
        </Text>

        <Text as="p" size="lg">
          Сейчас я{' '}
          <span className={cx('line-through')}>
            перебираюсь на темную сторону
          </span>{' '}
          постигаю дзен go разработки,{' '}
          <span className={cx('line-through')}>
            туплю на{' '}
            <Link
              variant="solid"
              weight="bold"
              href="https://leetcode.com/"
              isExternal
            >
              leetcode.com
            </Link>
          </span>{' '}
          тренирую себя на алгоритмах, бегаю на дорожке... и, конечно, щупаю ml
          – потому что кто знает, может, однажды машинное обучение научит меня,
          как зарабатывать больше футболистов сидя за{' '}
          <span className={cx('line-through')}>ноутбуком</span> macbook’ом...
        </Text>
      </TextGroup>
    </main>
  );
};

export default Home;
