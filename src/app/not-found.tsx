import { Link } from '@igoryusha22/promo-ui/Link';
import { Text } from '@igoryusha22/promo-ui/Text';
import { TextGroup } from '@igoryusha22/promo-ui/TextGroup';

import { MainLayout } from '@/components/MainLayout';

export default function NotFound() {
  return (
    <MainLayout isMainContent>
      <Text className="mb-4" as="h2" size="2xl" weight="black">
        404 | Страница не найдена
      </Text>

      <TextGroup>
        <Text size="lg">
          Страница устарела, была удалена или не существовала вовсе
        </Text>

        <Link href="/" variant="solid" weight="bold">
          Вернуться на главную
        </Link>
      </TextGroup>
    </MainLayout>
  );
}
