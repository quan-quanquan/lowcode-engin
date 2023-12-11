import { Form } from '@douyinfe/semi-ui';

export const FeildComponents = {
  Input: Form.Input,
  Select: Form.Select
}

export type FeildComponents = keyof typeof FeildComponents