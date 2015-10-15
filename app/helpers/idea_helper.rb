module IdeaHelper
  def format_body(idea)
    truncate(idea.body, length: 100, separator: " ")
  end
end
