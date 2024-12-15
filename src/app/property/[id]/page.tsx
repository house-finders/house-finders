import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { Property } from '@prisma/client';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
// import EditPropertyForm from '@/components/EditPropertyForm';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image';
// import { errors } from '@playwright/test';
// import { register } from 'module';
// import { classValidatorResolver } from '@hookform/resolvers/class-validator';
// import { Sliders } from 'react-bootstrap-icons';

/*
type TParam = Promise<{ slug: string[] }>;
export default async function EditStuffPage({ params }: { params: TParam }) {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  const user = session?.user as { id: string; email?: string | null; name?: string | null; image?: string | null };
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  console.log(params);
  const { slug } = await params;
  const id = 6; //Number(slug[1]);
  // const id = Number(Array.isArray(params?.id) ? params?.id[0] : params?.id);

  const property: Property | null = await prisma.property.findUnique({
    where: { id },
  });
  // console.log(stuff);
  if (!property) {
    return notFound();
  }
  console.log(slug);
  return (
    <div>
      <EditPropertyForm property={property} />
    </div>
  );
}

*/

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  // const user = session?.user as { id: string; email?: string | null; name?: string | null; image?: string | null };
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );

  const id = Number(params.id);
  const property: Property | null = await prisma.property.findUnique({
    where: { id },
  });
  if (!property) {
    return notFound();
  }
  console.log(id);
  const landlord = await prisma.user.findUnique({
    where: { email: property.landlord },
  });
  if (!landlord) {
    return notFound();
  }
  console.log(`Landlord ID: ${landlord.id}`);

  return (
    <Container className="py-3">
      <Row className="justify-content-center p-3">
        <Image
          src="/House1FullView.jpg"
          alt="Full view of the house"
          width={500}
          height={300}
          style={{ width: '50%', height: 'auto' }}
        />
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h2 style={{ color: 'green' }}>
            $
            {property.price}
            /month
          </h2>
          <h4>{property.address}</h4>
        </Col>
        <Col className="text-center">
          <Container>
            <Row>
              <Col>
                <h2><strong style={{ color: 'green' }}>{property.bedrooms}</strong></h2>
                beds
              </Col>
              <Col>
                <h2><strong style={{ color: 'green' }}>{property.bathrooms}</strong></h2>
                baths
              </Col>
              <Col>
                <h2><strong style={{ color: 'green' }}>{property.sqft}</strong></h2>
                sqft
              </Col>
            </Row>
          </Container>
        </Col>
        <Col>
          <Card
            className="p-2 rounded"
            style={{
              width: '50%',
              backgroundColor: 'transparent',
              borderWidth: '2px',
              borderColor: 'green',
              textAlign: 'center',
            }}
          >
            <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '5px' }}>
              Contact Information:
              {' '}
              {landlord.email}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}