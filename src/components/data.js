import { useEffect, useState } from 'react';
import { AiOutlineBank, AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineAnalytics } from 'react-icons/md';
import { HiOutlineCash } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiReceiveMoney } from 'react-icons/gi';
import { GrTarget, GrTransaction,GrAtm } from 'react-icons/gr';

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Overall',
        icon: <MdOutlineAnalytics />,
        linkname: 'overall',
      }
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'Purchase',
        icon: <HiOutlineCash />,
        linkname: 'purchase',
      },
      {
        name: 'Goals',
        icon: <GrTarget />,
        linkname: 'goals',
      },
      {
        name: 'P2P',
        icon: <GrTransaction />,
        linkname: 'p2p'
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'Other Accounts',
        icon: <AiOutlineBank />,
        linkname: 'OtherAccounts',
      },
      {
        name: 'ATM Transaction',
        icon: <GrAtm />,
        linkname: 'atm',
      }
    ],
  }];