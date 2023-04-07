import { uniqueId } from '@/utils';

type SectionCategory = {
  id: string;
  category?: string;
  title: string;
  description: string;
  articlePath: string;
};

const sectionCategories: Record<string, SectionCategory[]> = {
  '/developers': [
    {
      id: `category-${uniqueId()}`,
      category: 'Build & Earn',
      title: 'Rewards',
      description: 'Learn how the rewards system incentivizes developers to build dapps and contribute to the growth of the network.',
      articlePath: '/developers/rewards/managing-rewards',
    },
    {
      id: `category-${uniqueId()}`,
      category: 'How to’s',
      title: 'Guides',
      description: 'Instructions on how to build common web3 use cases on the Archway chain',
      articlePath: '/developers/guides/guides-overview',
    },
  ],
  '/validators': [
    {
      id: `category-${uniqueId()}`,
      category: 'Node Operators',
      title: 'Running a Node',
      description: 'Reference for installing, configuring, and runnning a node, as well as joining a network.',
      articlePath: '/validators/running-a-node',
    },
    {
      id: `category-${uniqueId()}`,
      category: 'Validators',
      title: 'Becoming a validator',
      description: 'Be part of the network. Understand the requirements and steps to becoming a validator.',
      articlePath: '/validators/requirements',
    },
  ],
  '/community': [
    {
      id: `category-${uniqueId()}`,
      title: 'Create a new wallet',
      description: 'What to consider and how to create a wallet.',
      articlePath: '/community/wallet-setup/wallet',
    },
    {
      id: `category-${uniqueId()}`,
      title: 'Staking',
      description: 'How to provide network security.',
      articlePath: '/community/staking/staking',
    },
    {
      id: `category-${uniqueId()}`,
      title: 'Contributing to the docs',
      description: 'Get involved, and help make the documentation more helpful for the community.',
      articlePath: '/community/contribute',
    },
  ],
};

export const useSectionCategories = () => {
  const route = useRoute();
  return { categories: sectionCategories[route.path] };
};
