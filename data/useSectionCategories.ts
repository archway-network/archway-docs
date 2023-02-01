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
      category: 'Clarification',
      title: 'Documentation',
      description: 'Collection of Informational and reference articles that you’ll need to be aware of to build on Archway.',
      articlePath: '/overview',
    },
    {
      id: `category-${uniqueId()}`,
      category: 'How to’s',
      title: 'Guides & Tutorials',
      description: 'Guides and How to’s for building common web3 usecases, on the Archway chain.',
      articlePath: '/overview',
    },
  ],
  '/validators': [
    {
      id: `category-${uniqueId()}`,
      category: 'Node Operators',
      title: 'Running a Node',
      description: 'Reference for installing, configuring, and runnning a node, as well as joining a network.',
      articlePath: '/overview',
    },
    {
      id: `category-${uniqueId()}`,
      category: 'Validators',
      title: 'Becoming a validator',
      description: 'Be part of the network. Understand the requirements and steps to becoming a validator.',
      articlePath: '/overview',
    },
  ],
  '/community': [
    {
      id: `category-${uniqueId()}`,
      title: 'Create a new Wallet',
      description: 'What to consider and how to create a wallet.',
      articlePath: '/community/wallet',
    },
    {
      id: `category-${uniqueId()}`,
      title: 'Staking',
      description: 'How to provide network security.',
      articlePath: '/community/staking',
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
