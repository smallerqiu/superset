/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { styled } from '@superset-ui/core';
import { Next } from './Next';
import { Prev } from './Prev';
import { Item } from './Item';
import { Ellipsis } from './Ellipsis';

interface PaginationProps {
  children: JSX.Element | JSX.Element[];
}

const PaginationList = styled.ul`
  ${({ theme }) => `
  display: inline-block;
  padding: ${theme.sizeUnit * 3}px;

  li {
    display: inline;
    margin: 0 4px;

    > span {
      padding: 8px 12px;
      text-decoration: none;
      background-color: ${theme.colorBgContainer};
      border: 1px solid ${theme.colorBorder};
      border-radius: ${theme.borderRadius}px;
      color: ${theme.colorText};

      &:hover,
      &:focus {
        z-index: 2;
        color: ${theme.colorText};
        background-color: ${theme.colorBgLayout};
      }
    }

    &.disabled {
      span {
        background-color: transparent;
        cursor: default;

        &:focus {
          outline: none;
        }
      }
    }
    &.active {
      span {
        z-index: 3;
        color: ${theme.colorBgLayout};
        cursor: default;
        background-color: ${theme.colorPrimary};

        &:focus {
          outline: none;
        }
      }
    }
  }
`}
`;

function Pagination({ children }: PaginationProps) {
  return <PaginationList role="navigation">{children}</PaginationList>;
}

Pagination.Next = Next;
Pagination.Prev = Prev;
Pagination.Item = Item;
Pagination.Ellipsis = Ellipsis;

export default Pagination;
