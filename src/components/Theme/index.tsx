import React, { ReactNode } from "react";
import * as style from "./styles";
import { Header } from "../Header";
import SideBarItem from "../SidebarItem";
import {useForm} from "../../contexts/FormContext"

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const {state} = useForm()

  return (
    <style.Container>
      <style.Area>
        <Header />

        <style.Steps>
          <style.Sidebar>
            <SideBarItem
              title="Pessoal"
              description="Se identifique"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SideBarItem
              title="Profissional"
              description="Seu nível"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SideBarItem
              title="Contatos"
              description="Como te achar"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
          </style.Sidebar>
          <style.Page>{children}</style.Page>
        </style.Steps>
      </style.Area>
    </style.Container>
  );
};
