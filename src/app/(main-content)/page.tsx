import cx from 'classnames';

import { Link } from '@igoryusha22/promo-ui/Link';
import { Text } from '@igoryusha22/promo-ui/Text';
import { TextGroup } from '@igoryusha22/promo-ui/TextGroup';

import { TELEGRAM_LINK } from '@/shared/constants/TELEGRAM_LINK';

const Home = () => {
  return (
    <main>
      <Text className="block mb-4" size="2xl" weight="black">
        Who the hell am I?
      </Text>

      <TextGroup>
        <Text as="p" size="lg">
          Я{' '}
          <Link variant="solid" weight="bold" href={TELEGRAM_LINK} isExternal>
            @igoryusha22
          </Link>
          , frontend архитектор в{' '}
          <Link
            variant="solid"
            weight="bold"
            href="https://amocrm.ru"
            isExternal
          >
            amoCRM
          </Link>
          /
          <Link
            variant="solid"
            weight="bold"
            href="https://kommo.com"
            isExternal
          >
            Kommo
          </Link>
          , фанат всего сложного, фантазер-мечтатель.
        </Text>

        <Text as="p" size="lg">
          Мне 22 года, я без высшего образования, чему несказанно рад, потому
          что мое образование – это чистый опыт и крутая профессия.
        </Text>

        <Text as="p" size="lg">
          Время от времени{' '}
          <span className={cx('line-through')}>
          веду{' '}
            <Link variant="solid" weight="bold" href="/articles">
              блог
            </Link>
          </span>
          , где рассказываю о проблемах и сложных темах, с которыми я
          сталкивался на моем пути инженера и тимлида.
        </Text>

        <Text as="p" size="lg">
          Не боюсь legacy, ищу вызовы, хочу в неизведанное{' '}
          <span className={cx('line-through')}>и много денег</span>.
        </Text>

        <Text as="p" size="lg">
          Делаю наш продукт лучше с каждым днем, играю в сквош, рву Faceit и посматриваю Suits.
        </Text>
      </TextGroup>
    </main>
  );
};

export default Home;
