using System;
using System.ComponentModel.DataAnnotations;


namespace mission4.Models
{
	public class GradeModel
	{
        [Required]
        [Range(0, 100)]
        public int assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int groupProject { get; set; }

        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public int final { get; set; }

        [Required]
        [Range(0, 100)]
        public int intex { get; set; }
    }
}

