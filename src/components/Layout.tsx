import { Outlet, useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { MainMenu } from './MainMenu'
import { Breadcrumbs } from 'src/components/Breadcrumbs'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from 'src/__data__'
import {contactsStore} from "src/storeMobx/contactsStore";
import {groupsStore} from "src/storeMobx/groupsStore";
import {observer} from "mobx-react-lite";

export const Layout = observer(() => {
  const location = useLocation()
  const pathNames = location.pathname.split('/').filter((x) => x)

  useEffect(() => {
    contactsStore.contactsListLoaded(DATA_CONTACT || []);
    groupsStore.groupsListLoaded(DATA_GROUP_CONTACT || []);
  }, [])

  return (
      <Container>
        <Row>
          <Col xxl={12}>
            <MainMenu />
          </Col>
          <Col xxl={12}>
            <Breadcrumbs pathNames={pathNames} />
          </Col>
          <Col xxl={12}>
            <Outlet />
          </Col>
          <Col xxl={12}>
            <footer></footer>
          </Col>
        </Row>
      </Container>
  )
})