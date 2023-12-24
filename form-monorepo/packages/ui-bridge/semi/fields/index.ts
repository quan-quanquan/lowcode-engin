import { Form } from '@douyinfe/semi-ui';

export const fieldComponents = {
  Input: Form.Input,
  Select: Form.Select
}

export type fieldComponents = keyof typeof fieldComponents