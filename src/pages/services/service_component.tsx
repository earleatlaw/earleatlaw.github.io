import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiHideFor,
  EuiText,
  EuiTextAlign,
  EuiTitle,
} from '@elastic/eui';
import React from 'react';
import { Button, ImageCard, Locale } from '../../components';
import { Routes } from '../../constants';

interface Props {
  id: string;
  index: number;
  listItems?: number;
  type: string;
}

const buildList = (
  token: string,
  id: string,
  listItems?: number
): JSX.Element => {
  const items: JSX.Element[] = [];

  if (listItems) {
    for (let i = 1; i <= listItems; ++i) {
      items.push(
        <li key={`${id}-${i}`}>
          <Locale token={`${token}.list.${i}`} />
        </li>
      );
    }
  }

  items.push(
    <li key={`${id}-contact`}>
      <Locale token="service.list.contact" />
    </li>
  );

  return <ul>{items}</ul>;
};

/**
 * `ServiceComponent` represents a singular service offering's description
 * and a mechanism for setting up the Contact form to be used.
 */
export const ServiceComponent: React.VFC<Props> = (props: Props) => {
  const { id, listItems, type } = props;
  const token = `page.${type}.service.${id}`;

  const row = [
    <EuiFlexItem>
      <EuiText>
        <EuiTitle>
          <h2>
            <Locale token={`${token}.title`} />
          </h2>
        </EuiTitle>
        <p>
          <Locale token={`${token}.desc`} />
        </p>
        {buildList(token, id, listItems)}
        <EuiTextAlign textAlign="center">
          <Button
            href={`${Routes.contact}/${type}/${id}`}
            token="service.button.contact"
          />
        </EuiTextAlign>
      </EuiText>
    </EuiFlexItem>,
    <EuiHideFor sizes={['xs']}>
      <EuiFlexItem>
        <ImageCard
          alt=""
          src={`/images/services/${props.type}.${props.id}.png`}
        />
      </EuiFlexItem>
    </EuiHideFor>,
  ];

  if (props.index % 2 === 1) {
    row.reverse();
  }

  return (
    <div className="serviceOffering" id={props.id}>
      <EuiFlexGroup>
        {row[0]}
        {row[1]}
      </EuiFlexGroup>
    </div>
  );
};
