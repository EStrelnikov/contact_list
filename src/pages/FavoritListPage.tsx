import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { ContactDto } from 'src/types/dto/ContactDto'
import {contactsStore} from "src/storeMobx/contactsStore";
import {favoritesStore} from "src/storeMobx/favoritesStrore";
import {observer} from "mobx-react-lite";

export const FavoritListPage = observer(() => {
  const [favoritesContacts, setFavoritesContacts] = useState<ContactDto[]>([])
  const contacts = contactsStore.contacts;
  const favorites = favoritesStore.favorites;

  useEffect(() => {
    const favList = contacts.filter((contact) =>
        favorites.includes(contact.id),
    )
    setFavoritesContacts(favList)
  }, [favorites])

  return (
      <Row xxl={4} className='g-4'>
        {favoritesContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
        ))}
      </Row>
  )
})