namespace Behavior.Model.Ouput
{
    public class Response<T>
    {
        public bool Status { set; get; }
        public int? CountData { set; get; }
        public string Error { set; get; }
        private T data;
        public T Data
        {
            get { return data; }
            set { data = value; }
        }
    }
}
