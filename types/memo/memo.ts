export interface Memo {
  id: string;
  title: string;
  content: string;
}

export interface MemoFormProps {
  setAllMemo: React.Dispatch<React.SetStateAction<Memo[]>>;
}

export interface MemoFormData {
  title: string;
  content: string;
}
