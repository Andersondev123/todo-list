import Badge from "../components/badge";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import Card from "../components/card";
import Container from "../components/container";
import Icon from "../components/icon";
import InputCheckbox from "../components/input-checkbox";
import InputText from "../components/input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/Check.svg?react";
import Pencilcon from "../assets/icons/pencil.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export default function PageComponents(){
   return (
    <Container>
      <div className="grid gap-8">
        <div className="flex flex-col gap-2">
        <Text as="div" variant="body-sm-bold" className="text-pink-base">
          Ola, mundo!!
        </Text>
        <Text as="div" className="text-green-base">
          Ola, mundo!!
        </Text>
        <Text as="div"variant="body-md-bold">
          Ola, mundo!!
        </Text>
        <Text>
          Levar o gato pra comer
        </Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-grenn-base"/>
          <Icon svg={CheckIcon}/>
          <Icon svg={PlusIcon}/>
          <Icon svg={SpinnerIcon} animate/>
          <Icon svg={Pencilcon}/>
          <Icon svg={XIcon}/>
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading></Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
          <Button icon={PlusIcon} handling>Criando...</Button>
        </div>

        <div className="flex gap-1"> 
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>
          <ButtonIcon loading icon={TrashIcon}/>
          <ButtonIcon handling icon={TrashIcon}/>
        </div>

        <div>
          <InputText/>
        </div>

        <div className="flex gap-1">
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div>
            <Card size="md">Ola, mundo</Card>
        </div>

        <div className="space-y-2">
            <Skeleton className="h-6"/>
            <Skeleton className="h-6"/>
            <Skeleton className="w-96 h-6"/>
        </div>

      </div>
    </Container>
  );
}