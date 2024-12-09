'use client';

import { Property } from '@prisma/client';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Card, ListGroup } from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';
import placeholder from '../../public/placeholder.png';

/* Renders a single Property. See list/page.tsx. */
const PropertyCard = ({ property }: { property: Property }) => {
  const { data: session } = useSession();
  const isOwner = session?.user?.email === property.landlord;

  return (
    <Card border="info" style={{ width: '20rem' }}>
      <Card.Img src={placeholder.src} variant="top" height={180} />
      <Card.Body>
        <Card.Title>{property.address}</Card.Title>
        <Card.Subtitle>
          $&nbsp;
          {property.price}
        </Card.Subtitle>
        <Card.Subtitle>
          {property.id}
        </Card.Subtitle>
        <Card.Text>
          Condition: &nbsp;
          {property.condition}
          <br />
        </Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            {property.bedrooms}
          &nbsp; bedrooms
          </ListGroup.Item>
          <ListGroup.Item>
            {property.bathrooms}
          &nbsp; bathrooms
          </ListGroup.Item>
          <ListGroup.Item>
            {property.sqft}
          &nbsp; sqft
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          Landlord: &nbsp;
          {property.landlord}
        </Card.Footer>
        {isOwner && (
        <Link href={`/edit/${property.id}`} className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary btn-sm mt-2"
            style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem', backgroundColor: 'green' }}
          >
            <Pencil color="white" />
            <div>Edit</div>
          </button>
        </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
