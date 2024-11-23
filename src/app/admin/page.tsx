import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { User } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import ContactCardAdmin from '@/components/ContactCardAdmin';

const AdminPage = async () => {
  const users: User[] = await prisma.user.findMany();
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string; };
    } | null,
  );

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center">ADMIN</h1>
            {users.filter((user: User) => user.role === 'ADMIN').map((user: User) => (
              <Col key={user.id + user.role}>
                <ContactCardAdmin user={user} />
              </Col>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="text-center">USERS</h1>
            {users.filter((user: User) => user.role === 'USER').map((user: User) => (
              <Col key={user.id + user.role}>
                <ContactCardAdmin user={user} />
              </Col>
            ))}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default AdminPage;
