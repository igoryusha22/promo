import cx from 'classnames';

import { Card } from '@igoryusha22/promo-ui/Card';
import { CardGroup } from '@igoryusha22/promo-ui/CardGroup';

import { Text } from '@igoryusha22/promo-ui/Text';
import { TextGroup } from '@igoryusha22/promo-ui/TextGroup';
import { Link } from '@igoryusha22/promo-ui/Link';

const Projects = async () => {
  return (
    <>
      <Text className="mb-4" as="h2" size="2xl" weight="black">
        Проекты
      </Text>

      {/* <TextGroup>
        <Text as="p" size="lg"></Text>
      </TextGroup> */}

      <CardGroup className={cx('mt-12')}>
        <Card
          isExternal
          href="https://chromewebstore.google.com/detail/fastcup-enhancer/cbhlbndhleffcggbifpegbmampiakfbk"
          title="Fastcup Enhancer"
          description={
            <>
              Расширение для Google Chrome направленное на улучшение удобства
              пользования платформой{' '}
              <Link href="https://fastcup.net" variant="solid" isExternal>
                FASTCUP
              </Link>
              .
            </>
          }
          cta="Посетить вебсайт"
        />
      </CardGroup>
    </>
  );
};

export default Projects;
